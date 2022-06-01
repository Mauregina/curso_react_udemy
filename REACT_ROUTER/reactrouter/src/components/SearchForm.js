import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  // Redireciona o usuario dentro do codigo do componente.
  // Pega a busca do usuario e redireciona para pagina de busca
  const navigate = useNavigate()
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" value="Buscar"/>
    </form>
  )
}

export default SearchForm