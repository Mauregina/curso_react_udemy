import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

import { ExampleUseContext } from './components/ExampleUseContext';

function App() {
  return (
    <div className="App">
      <ExampleUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          <div>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/About">About</Link></p>
          </div>
          {/* Elementos fora do Routes estarão presentes em todas as páginas*/}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
          </Routes>
        </BrowserRouter>
      </ExampleUseContext>
    </div>
  );
}

export default App;
