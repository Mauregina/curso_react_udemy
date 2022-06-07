import { createContext } from 'react';
import Context from './components/Context';
import Destructuring, { Category } from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  const name: string = "Maura";
  const age: number = 35;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  }

  const myText: textOrNull = "Tem algum texto aqui";
  const mySecondText: textOrNull = null;

  const testandoFixed: fixed = "Isso";

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {
        isWorking && <p>Está trabalhando!</p>
      }
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name={name}/>
      <Destructuring 
        title="Primeiro post" 
        content="Algum conteúdo" 
        commentQty={10} 
        tags={["ts", "js"]}
        category={Category.JS}
      />
      <Destructuring 
        title="Segundo post" 
        content="Algum conteúdo" 
        commentQty={10} 
        tags={["ts", "js"]}
        category={Category.P}
      />
      <State />
      {myText && <p>Tem texto</p>}
      {!mySecondText && <p>É nulo</p>}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
