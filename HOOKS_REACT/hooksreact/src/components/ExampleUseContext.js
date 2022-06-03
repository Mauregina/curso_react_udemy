import { createContext, useState } from 'react';

export const SomeContext = createContext();

export const ExampleUseContext = ({ children }) => {
    const [contextValue, setContextValue] = useState("Testing Contex");

    return (
        <SomeContext.Provider value={{ contextValue, setContextValue }}>
            {children}
        </SomeContext.Provider>    
    );
};

