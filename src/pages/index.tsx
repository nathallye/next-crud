import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import useClients from "../hooks/useClients";

export default function Home() {

  const { 
    client,
    clients,
    newClient,
    saveClient,
    excludedClient,
    selectedClient,
    tableVisible,
    showTable
  } = useClients();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {
        /*visible === "table"*/ 
        tableVisible
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
              canceled={() => /*setVisible("table")*/ showTable}
            />)
        }        
      </Layout>
    </div>
  )
}