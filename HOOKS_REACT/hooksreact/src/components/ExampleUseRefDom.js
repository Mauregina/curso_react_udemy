import { useState, useRef } from 'react'

const ExampleUseRefDom = () => {
  const inputRef = useRef();
  const [texto, setTexto] = useState('texto');

  const handleSubmit = (e) => {
    e.preventDefault();    
    console.log(inputRef);
    console.log(texto);
    setTexto("");
    inputRef.current.focus(); // Joga o foco no input que está com referencia
  }

  return (
    <div>
        <h2>Example UseRefDom</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default ExampleUseRefDom;