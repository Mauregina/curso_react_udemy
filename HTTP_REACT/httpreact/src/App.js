import './App.css';

import {useState} from 'react';
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { data: items, httpConfig, loading, error} = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name, price
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - {product.price}
             <button onClick={() => handleRemove(product.id)}>Remover</button> </li>
          ))}
        </ul>
      )}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Produto:</span>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span>Preço:</span>
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {loading &&<input type="submit" disabled value="Aguarde"/>}
          {!loading &&<input type="submit" value="Criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
