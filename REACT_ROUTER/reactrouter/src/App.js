import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// pages
import Home from './pages/Home';
import Product from './pages/Product'
import About from './pages/About';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter> 
        <Navbar />
        <SearchForm />
        {/* Elementos fora do Routes estarão presentes em todas as páginas*/}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products/:id" element={<Product />}/>
          <Route path="/products/:id/info" element={<Info />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
