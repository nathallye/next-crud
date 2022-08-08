interface ButtonProps {
  children: any
  colorInitial?: "from-green-400" | "from-blue-400" | "from-gray-400"
  colorFinale?: "to-green-700" | "to-blue-700" | "to-gray-700"
}

export default function Button(props: ButtonProps) {

  const colorInitial = props.colorInitial ?? "from-gray-400";
  const colorFinale = props.colorFinale ?? "to-gray-700";

  return (
    <button className={`
      bg-gradient-to-r ${colorInitial} ${colorFinale}
      text-white mb-4 mr-4 px-4 py-2 rounded-md 
      
    `}>
      {props.children}
    </button>
  )
}