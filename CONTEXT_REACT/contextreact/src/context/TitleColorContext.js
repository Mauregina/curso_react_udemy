import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch (action.type) {
        case "GREEN":
            return { ...state, color: "green" };
        case "PINK":
            return { ...state, color: "pink" };    
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });
    
    console.log('state: ', state);

    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    );
};