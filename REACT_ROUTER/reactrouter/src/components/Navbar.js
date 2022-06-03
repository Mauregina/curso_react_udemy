import './Navbar.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about"
          className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
        >
          Sobre</NavLink>
    </nav>
  )
}

export default Navbar