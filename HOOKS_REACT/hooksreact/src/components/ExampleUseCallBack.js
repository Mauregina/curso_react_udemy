import { useCallback, useState } from 'react';

import List from './List';

const ExampleUseCallBack = () => {
  const [contador, setContador] = useState(0);

  //UseCallBack permite que esta funcao seja chamada apenas uma vez 
  //quando o componente é renderizado, uma vez que o array de dependecias é []
  //Dessa forma, consigo deixar o retorno da função memorizado,
  //sendo seu retorno atualizado apenas quando colocarmos algo no array de dependência,
  //melhorando a performance.
  const getItemsFromDB = useCallback(() => {
      return ['a', 'b', 'c'];
  }, []);  

  return (
    <div>
        <h2>Example UseCallBack</h2>
        <List getItems={getItemsFromDB}/>
        <p>Contador: {contador}</p>
        <button onClick={ () => setContador(contador+1) }>Adicionar</button>
    </div>
  )
}

export default ExampleUseCallBack;