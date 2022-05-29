import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 5;
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent/>
      <p>Parágrafo do App.js. Aqui podemos ver que CSS do componente vazou para outros componentes. Essa regra é do 'My component'</p>
      <p style={{color: "blue", padding: "25px", borderTop: "10px solid red"}}>Parágrafo estilizado de forma inline</p>
      <h2 style={n<10? ({color: "pink"}): null}>CSS Dinâmico</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Este título tem classe dinâmica</h2>
      <Title/>
    </div>
  );
}

export default App;
