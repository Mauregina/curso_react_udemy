import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { CounterContext } from '../context/CounterContext';
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {
    const {counter} = useContext(CounterContext);
    const {color, dispatch} = useTitleColorContext()
    
    return (
      <div>
        <h1 style={{color:color}}>Products</h1>
        <p>Valor do contador {counter}</p>
        <ChangeCounter/>
      </div>
    )
  }
  
  export default Products