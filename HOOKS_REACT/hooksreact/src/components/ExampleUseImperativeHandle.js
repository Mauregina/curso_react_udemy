import { useRef } from 'react';
import SomeComponent from './SomeComponent';

const ExampleUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
        <h2>Example UseImperativeHandle</h2>
        <SomeComponent ref={componentRef}/>
        {/* A linha abaixo envia uma referencia para um componente filho que tem um input 
            O componente pai executa uma funcao no componente filho, de forma imperativa
        */}
        <button onClick={() => componentRef.current.validate()}>Validate</button>
    </div>
  )
}

export default ExampleUseImperativeHandle;