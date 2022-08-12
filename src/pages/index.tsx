import { useEffect, useState } from "react";
import CollectionClients from "../backend/db/CollectionClients";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";

export default function Home() {

  const repo: ClientRepository = new CollectionClients();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients);
      setVisible("table");
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  async function excludedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === "table"
          ? (<>
              <div className="flex justify-end">
                <Button 
                  colorInitial="from-green-400" 
                  colorFinale="to-green-700"
                  onClick={newClient}
                >
                  Novo Cliente
                </Button>
              </div>
              <Table 
                clients={clients} 
                selectedClient={selectedClient} 
                excludedClient={excludedClient} 
              />
            </>)
          : (<Form 
              client={client} 
              cliendChanged={saveClient}
              canceled={() => setVisible("table")}
            />)
        }        
      </Layout>
    </div>
  )
}