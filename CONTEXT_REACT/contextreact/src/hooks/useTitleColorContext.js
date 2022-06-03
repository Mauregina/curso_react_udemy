import { useContext } from "react"
import {TitleColorContext} from '../context/TitleColorContext';

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if (!context) {
        console.log("Contexto não encontrado");
    } else {
        console.log('TitleColorContext', context);
    }

    return context;
}