
import { useState } from "react";

const ManageData = () => {

  let someData = 10;

  const [num, setNum] = useState(15)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={()=> (someData=15)}>Mudar valor da variável</button>
      </div>
      <div>
        <p>Valor: {num}</p>
        <button onClick={()=>setNum(20)}>Atualiza valor da variável</button>
      </div>
    </div>
  )
}
 
export default ManageData