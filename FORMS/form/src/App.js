import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>My Form</h2>
      <MyForm v_nome="Maura" v_email="mauraregina@gmail.com" v_bio="Eu sou programadora" v_funcao="editor"/>
    </div>
  );
}

export default App;
