// import React from "react";
import Title from "./Title";

interface LayoutProps {
  // se quisermos que a propriedade seja opctional podemos colocar ? depois do nome, assim title?: string
  title: string, // exige o atribulo title que é do tipo string
  children: any // exige um componente filho que pode ser de qualquer tipo
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Title>{props.title}</Title>
      <div className="p-6"> 
        {props.children}
      </div>
    </div>
  )
}
