import {useState} from 'react'

const ConditionalRender = () => {
  const [valor, setValor] = useState(true)
  const [nome, setNome] = useState("Tobias")

  return (
    <div>
        <div>
            <h1>Conditional render</h1>
            <button onClick={()=>setValor(!valor)}>Altera valor</button>
            {valor && <p>Se valor é TRUE, este texto é exibido.</p>}
            {!valor && <p>Se valor é FALSE, este texto é exibido.</p>}
        </div>
        <div>
            <h1>If Else</h1>
            {nome ==="Maura" ? (<p>Te achamos... Bem-vinda Maura.</p>): (<p>Você não é a Maura!.</p>)}
            <button onClick={()=>setNome("Maura")}>Procurar a Maura</button>
        </div>
    </div>
  )
}

export default ConditionalRender