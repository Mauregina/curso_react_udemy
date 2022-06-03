import ExampleUseReducer from "../components/ExampleUseReducer";
import ExampleUseState from "../components/ExampleUseState";
import ExampleUseEffect from "../components/ExampleUseEffect";

import { useContext } from "react";
import { SomeContext } from "../components/ExampleUseContext";

const Home = () => {
  // useContext permite consumir contextos 
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>Home</h1>
        <hr />
        <ExampleUseState/>
        <hr />
        <ExampleUseReducer/>
        <hr />
        <ExampleUseEffect/>
        <hr />
        <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default Home;

//Export permite criar módulos que serão utilizados em outro arquivo, onde este será importado.

//Export (sem Default) permite que existam vários exports em um mesmo arquivo.
//Export Default permite que exista apenas um único export dentro do script.