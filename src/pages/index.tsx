import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana Goez", 34, "1"),
    new Client("Joana Gomes", 19, "2"),
    new Client("Beatriz Mendes", 24, "3"),
    new Client("João Garrido", 23, "4"),
    new Client("Daniel Malfaia", 30, "5"),
    new Client("Rafael Costa", 29, "6")
  ];

  const [visible, setVisible] = useState<"table" | "form">("table");

  function selectedClient(client: Client) {
    console.log(`Editar ${client.name}`)
  }

  function excludedClient(client: Client) {
    console.log(`Excluir ${client.name}`)
  }

  function saveClient(client: Client) {
    console.log(client)
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
                  onClick={() => setVisible("form")}
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
              client={clients[0]} 
              cliendChanged={saveClient}
              canceled={() => setVisible("table")}
            />)
        }        
      </Layout>
    </div>
  )
}