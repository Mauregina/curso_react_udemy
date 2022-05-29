import {useState} from "react";
import './MyForm.css';

const MyForm = ({v_nome, v_email, v_bio, v_funcao}) => {
  const [nome, setNome] = useState(v_nome ? v_nome : "");
  const [email, setEmail] = useState(v_email ? v_email: "");
  const [bio, setBio] = useState(v_bio ? v_bio: "");
  const [funcao, setFuncao] = useState(v_funcao? v_funcao: "");

  const handleName = (e) => {
    setNome(e.target.value);
  }

  const handleSubmit= (e) => {
    e.preventDefault(); //evita que a pagina seja recarregada, afetando a experiencia do usuario
    
    setNome("");
    setEmail("");
    setBio("");
    setFuncao("");
  }

  return (
    <div>
        {/* criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" placeholder="Digite seu nome" onChange={handleName} value={nome}/>
            </div>
            {/* label envolvendo input. React sugere essa abordagem */}
            <label>
                <span>E-mail: </span>
                <input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>Bio: </span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Funções no sistema: </span>
                <select name="funcoes" onChange={(e) => setFuncao(e.target.value)} value={funcao}>
                    <option value="usuario">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm