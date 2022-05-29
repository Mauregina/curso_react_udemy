
const Destructuring = ({nome, idade, profissao, novaFunc}) => {
  return (
    <div>
        <h1>Destructuring</h1>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissao: {profissao}</li>
            {novaFunc && <li>Seja bem-vinda</li>}
        </ul>
    </div>
  )
}

export default Destructuring;