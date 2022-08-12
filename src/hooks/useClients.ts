import { useEffect, useState } from "react";
import CollectionClients from "../backend/db/CollectionClients";

import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import useTableOrForm from "./useTableOrForm";


export default function useClients() {
  const repo: ClientRepository = new CollectionClients();

  const { 
    tableVisible, formVisible, showTable, showForm
  } = useTableOrForm();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients);
      showTable();
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    showForm();
  }

  async function excludedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    showForm();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clients,
    newClient,
    saveClient,
    excludedClient,
    selectedClient,
    getAll,
    tableVisible,
    showTable
  }
}