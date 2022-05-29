import { useState } from 'react';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import Props from './components/Props';
import Destructuring from './components/Destructuring';
import ListRenderInComponents from './components/ListRenderInComponents';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const nomePresidente = "Alberto";
  const [cidade] = useState("Manaus");
  const lista = [
    {id:1, nome:"Maura", idade:"35", profissao:"Programadora", novaFunc:false},
    {id:2, nome:"Olga", idade:"41", profissao:"Analista de sistema", novaFunc:true}
  ];

  function ExibirMsg(){
    console.log("Testando executar função como 'prop'");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    {id:1, nome:"Vilma", idade:"18", profissao:"Youtuber"},
    {id:2, nome:"Plinio", idade:"16", profissao:"Instagramer"},
    {id:3, nome:"Valquiria", idade:"23", profissao:"Tiktoker"}
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <div>
          {/* Imagem em PUBLIC */}
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        <div>
          {/* Imagem em asset */}
          <img src={City} alt="Cidade" />
        </div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        <Props cidadeAtual={cidade} presidente={nomePresidente}/>
        <Destructuring nome="Maura" idade="35" profissao="Programadora" novaFunc={false}/>
        <Destructuring nome="Olga" idade="41" profissao="Analista de sistema" novaFunc={true}/>
        {
          lista.map((item)=>(
            <ListRenderInComponents 
              key={item.id} 
              nome={item.nome} 
              idade={item.idade} 
              profissao={item.profissao} 
              novaFunc={item.novaFunc}/>
          ))
        }
        <Fragment/>
        <Container parametro="Testando passagem de parametro com children">
          <p>Este é o conteúdo contido no 'children'...</p>
        </Container>
        <Container parametro="Testando passagem de parametro com children novamente">
          <h2>Este é o conteúdo contido no 'children'...</h2>
        </Container>
        <ExecuteFunction myFunction={ExibirMsg}/>
        <Message msg={message}/>

        <div><h1>Desafio 4</h1></div>
        <ChangeMessageState handleMessage={handleMessage}/>
        {
          pessoas.map((item) => (
            <UserDetails
              key={item.id}
              nome={item.nome}
              idade={item.idade}
              profissao={item.profissao}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
