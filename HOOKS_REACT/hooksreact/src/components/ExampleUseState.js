import { useState } from "react";

const ExampleUseState = () => {
  let varName = 'Maura';
  const [name, setName] = useState('Nelson');
  const [age, setAge] = useState(18);
  
  const addName = () => {
    varName = 'Maura Regina';
    setName('Nelson Buainain');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nova idade: ', age);
    setAge("");
  }

  return (
    <div>
        <h2>Example UseState</h2>
        <p>variável: {varName}</p>
        <p>state: {name}</p>
        <button onClick={addName}>Adicionar sobrenome</button>
        <p>Qual sua idade?</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={age} onChange={(e)=> setAge(e.target.value)}/>
          <input type="submit" value="Enviar"/>
        </form>
        <p>Idade: {age}</p>
    </div>
  )
}

export default ExampleUseState;