import React from 'react'

const UserDetails = ({nome, idade, profissao }) => {
  return (
    <div>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissao: {profissao}</li>
            {
                idade >=18 ? (<li>Você está apto a tirar a carteira!</li>): (<li>Você NÃO está apto a tirar a carteira!</li>)
            }
        </ul>
    </div>

  )
}

export default UserDetails