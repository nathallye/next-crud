import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client
  cliendChanged?: (client: Client) => void
  canceled?: () => void
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id 
        ? (<Input 
            text="Código" 
            value={id} 
            readOnly 
            className="mb-5"
          />)
        : (false)
      }
      <Input 
        text="Nome" 
        value={name} 
        valueChanged={setName} 
        className="mb-4"
      />
      <Input 
        text="Idade" 
        type={"number"} 
        value={age} 
        valueChanged={setAge} 
      />

      <div className="flex justify-end mt-7">
        <Button onClick={() => props.cliendChanged?.(new Client(name, +age, id))} // se cliendChanged tiver sido passado/exigir iremos invocar a função passando com parâmentro a instância Client` que recebe como parâmetro name, age e id 
        // "+" na frente de age para garantir que o valor venha como tipo number
          colorInitial="from-blue-400" 
          colorFinale="to-blue-700"
        >
          {id ? "Alterar" : "Salvar"} 
        </Button>
        <Button onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}