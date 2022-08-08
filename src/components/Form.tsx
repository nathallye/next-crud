import { useState } from "react";

import Client from "../core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client
}

export default function Form(props: FormProps) {

  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? "");

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
        <Button 
          colorInitial="from-blue-400" 
          colorFinale="to-blue-700"
        >
          {id ? "Alterar" : "Salvar"} 
        </Button>
        <Button>
          Cancelar
        </Button>
      </div>
    </div>
  )
}