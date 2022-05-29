
import './App.css';
import FrutaDetalhe from './components/FrutaDetalhe';

const frutas = [
  { nome: "Maçã", preco: 1.5, qtd: 15 },
  { nome: "Uva", preco: 3.8, qtd: 23 },
  { nome: "Melância", preco: 5.0, qtd: 7 }
]

function App() {
  return (
    <div className="App">
      <h1>Catálogo de Frutas</h1>
      <div className="fruta-container">
        {frutas.map((item) => (
            <FrutaDetalhe 
              nome={item.nome}
              preco={item.preco}
              qtd={item.qtd}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
