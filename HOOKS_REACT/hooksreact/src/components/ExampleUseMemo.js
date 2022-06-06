import { useEffect, useMemo, useState } from "react";

const ExampleUseMemo = () => {
  const [number, setNumber] = useState(0);

  //const premium = ["10", "100", "1000"];
  // Desta forma, sempre entrará nesse useEffect pois, mesmo que o valor de 'premium' não
  // esteja sendo alterado, este valor está sendo utilizado (premium.includes...).

  // para resolver este problema, utiliza-se useMemo()
  // useMemo() permite que 'premium' seja chamada apenas uma vez 
  // quando o componente é renderizado, uma vez que o array de dependecias é []
  // Dessa forma, consigo deixar o retorno memorizado,
  const premium = useMemo(()=>{
    return ["10", "100", "1000"];
  }, []); 

  useEffect(() => {
    console.log("Premium number foi alterado.")
  }, [premium]);


  return (
    <div>
        <h2>Example UseMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premium.includes(number) ? <p>Número Premium</p>: ""}     
    </div>
  )
}

export default ExampleUseMemo;