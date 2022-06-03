// Criar context
import { useState, createContext }from 'react'

export const CounterContext = createContext();

// Prover context
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(100);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
};