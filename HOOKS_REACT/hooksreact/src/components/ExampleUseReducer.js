import { useReducer } from "react";

const ExampleUseReducer = () => {
  const initialNumber = 1;

  const numberReducer = (state, action) => {
    console.log('Valor do state:', state);

    switch (action.type){
      case "100":
      return 100;
      case "A": 
      return Math.random();
      default: 
      return "Não sei";
    }  
  }

  const [number, dispatchNumber] = useReducer(numberReducer, initialNumber);
  // 'useReducer' permite, em vez de usar o setNumber, usar o 'dispatch' que é onde executaremos a função para alterar valor do number.
  // 'state' é o valor de 'number' 
  // }
  
  return (
    <div>
        <h2>Example UseReducer</h2>
        <p>Número: {number}</p>
        <button onClick={() => dispatchNumber({type: "A"})}>Gerar número</button>
        <button onClick={() => dispatchNumber({type: "100"})}>Gerar número 100</button>
        <button onClick={() => dispatchNumber({type: ""})}>Não sei</button>
    </div>
  )
}

export default ExampleUseReducer;