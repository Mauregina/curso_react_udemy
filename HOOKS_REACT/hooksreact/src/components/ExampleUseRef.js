import { useEffect, useRef, useState } from 'react';

const ExampleUseRef = () => {
  const counterRef = useRef(0); // utilizado quando é necessário incrementar um valor sempre que há atualização do componente
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(()=>{
    counterRef.current = counterRef.current + 1; // permite que, mesmo alterando seu valor, nao re-renderiza o componente

    //setCounter1(counter1+1); Se atualizar o valor de um useState vai re-renderizar o componente infinitamente
  });

  return (
    <div>
        <h2>ExampleUseRef</h2>
        <p>Counter REF: {counterRef.current}</p>
        <p>Counter1: {counter1}</p>
        <button onClick={ () => setCounter1(counter1 + 1) }>Somar</button>
        <p>Counter2: {counter2}</p>
        <button onClick={ () => setCounter2(counter2 + 1) }>Somar</button>
    </div>
  )
}

export default ExampleUseRef;