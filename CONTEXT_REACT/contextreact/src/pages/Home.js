//import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
//import { CounterContext } from '../context/CounterContext';

import {useCounterContext} from '../hooks/useCounterContext';
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    //const {counter} = useContext(CounterContext);
    const {counter} = useCounterContext();
    const {color, dispatch} = useTitleColorContext()

    const setTitleColor = (color) => {
      dispatch({type: color});
    }

    return (
      <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador {counter}</p>
        <ChangeCounter/>
        <div>
          <button onClick={() => setTitleColor("GREEN")}>Alterar para verde</button>
          <button onClick={() => setTitleColor("PINK")}>Alterar para rosa</button>
        </div>
      </div> 
    )
  }
  
  export default Home