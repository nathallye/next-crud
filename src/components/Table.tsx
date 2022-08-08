import Client from "../core/Client";
import { EditIcon, TrashIcon} from "./Icons";

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  excludedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  const showActions = props.selectedClient || props.excludedClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? (<th className="p-2">Ações</th>) : false}
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}
          className={`
            ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
          `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? (renderActions(client)) : false}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center"> {/*Para os botões ficarem um ao lado do outros/display flex alinha os flex items em linha/row*/}
        {props.selectedClient 
        ? (<button onClick={() => props.selectedClient?.(client)} 
            className={`
              flex justify-center items-center
              text-green-600 rounded-full p-2 m-1
              hover:bg-purple-50
            `}>
            {EditIcon}
          </button>) 
        : false}
        {props.excludedClient
        ? (<button onClick={() => props.excludedClient?.(client)}
            className={`
              flex justify-center items-center
              text-red-500 rounded-full p-2 m-1
              hover:bg-purple-50
            `}>
            {TrashIcon}
           </button>)
        : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
       {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}