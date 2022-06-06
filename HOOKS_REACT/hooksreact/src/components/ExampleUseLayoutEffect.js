import { useEffect, useLayoutEffect, useState } from 'react'

 const ExampleUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("Mudou de novo");
  }, []);  

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome");
  }, []);
  // useLayoutEffect roda antes de renderizar o componente

  console.log(name);

  return (
     <div>
         <h2>Example UseLayoutEffect</h2>
         <p>Nome: {name}</p>
    </div>
  )
}

export default ExampleUseLayoutEffect