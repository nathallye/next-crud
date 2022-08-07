import Layout from "../components/Layout";
import Table from "../components/Table";

import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Joana", 19, "2"),
    new Client("Beatriz", 24, "3"),
    new Client("João", 23, "4"),
    new Client("Daniel", 30, "5"),
    new Client("Rafael", 29, "6")
  ];

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clients={clients} />
      </Layout>
    </div>
  )
}