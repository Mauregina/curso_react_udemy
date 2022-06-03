import { useEffect, useState } from "react";

const ExampleUseEffect = () => {

  const [number, setNumber] = useState(1);
  const [anotherNumber, setAnotherNumber] = useState(1);

  useEffect(() => {
    console.log("Executa sempre pois não há dependências!");          
  });

  useEffect(() => {
    console.log("Executa apenas uma vez pois array []!");          
  }, []);  

  useEffect(() => {
    console.log("Executa pois dependência foi alterada!");          
  }, [anotherNumber]);  

  useEffect(() => {

    const timer = setTimeout(()=> {
        console.log("SetTimeOut!");   
    }, 2000);
    
    return () => clearTimeout(timer); //avisa REACT que ao sair desse componente não deve ser executado mais esse hook 

  }, [anotherNumber]);    

  return (
    <div>
        <h2>Example UseEffect</h2>
        <p>Número: {number}</p>
        <p>Outro Número: {anotherNumber}</p>
        <button onClick={() => setNumber(number+1)}>Somar</button>
        <button onClick={() => setAnotherNumber(anotherNumber+1)}>Somar outro</button>
    </div>
  )
}

export default ExampleUseEffect;