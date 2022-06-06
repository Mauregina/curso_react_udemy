import { useContext } from "react";
import { SomeContext } from "../components/ExampleUseContext";

import ExampleUseRef from "../components/ExampleUseRef";
import ExampleUseRefDom from "../components/ExampleUseRefDom";
import ExampleUseCallBack from "../components/ExampleUseCallBack";
import ExampleUseMemo from "../components/ExampleUseMemo";
import ExampleUseLayoutEffect from "../components/ExampleUseLayoutEffect";

const About = () => {
  // useContext permite consumir contextos 
  const { contextValue, setContextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>About</h1>
      <hr />
      <p>Valor do contexto: {contextValue}</p>
      <button onClick={()=>setContextValue("Alterou")}>Alterar valor do contexto</button>
      <hr />
      <ExampleUseRef />
      <hr />
      <ExampleUseRefDom />
      <hr />
      <ExampleUseCallBack />
      <hr />
      <ExampleUseMemo />
      <hr />
      <ExampleUseLayoutEffect />
    </div>
  )
}

export default About;