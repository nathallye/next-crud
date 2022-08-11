import firebase from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClients implements ClientRepository {

  #conversor = {
    toFirestore(client: Client) {
      return  {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOPtions): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    }
  }
  
  async save(client: Client): Promise<Client> {
    // para salvar, termos dois cenários:
    if(client?.id) { // primeiro, se o client.id estiver setado significa que vamos alterar
      // await, pois vai ser de forma assíncrona
      await this.#collection().doc(client.id).set(client); // então para alterar, dentro da coleção de clientes, conseguimos acessar um cliente específico que é um documento/doc a partir do id dele(client.id) e em seguida, após acessar o cliente em questão podemos chamar o método set para setar as alterações
      return client; // se der tudo certo, vamos retornar o client com as alterações
    } else { // caso contrário, se o id não estiver setado significa que vamos salvar
      const docRef = this.#collection().add(client) // o método add retorna uma Promise de um DocumentReference, e como queremos pegá-lo vamos colocar um await e armazenar na constante docRef 
      const doc = await docRef.get(); // o método get retorna uma Promise de um DocumentSnapshop, e como queremos pegá-lo vamos colocar um await e armazenar na constante doc
      return doc.data(); // e apartir do doc utilizando o método data conseguimos pegar o cliente 
    }
  }

  async delete(client: Client): Promise<void> {
    return this.#collection().doc(client.id).delete(); // dentro da coleção de clientes, conseguimos acessar um cliente específico que é um documento/doc a partir do id dele(client.id) e em seguida, após acessar p cliente em questão podemos chamar o método delete
  }

  async getAll(): Promise<Client[]> {
    const query = await this.#collection().get() // esse método retorna uma Promise de um QuerySnapshot, e como queremos pegá-lo vamos colocar um await e armazenar na constante query 
    return query.docs.map(doc => doc.data()) ?? []; // e apartir de query vamos ter acesso aos documentos
  }

  #collection() {
    return firebase
      .firestore().collection("clients")
      .withConverter(this.#conversor);
  }
}