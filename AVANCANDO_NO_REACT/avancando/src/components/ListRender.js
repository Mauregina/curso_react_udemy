import {useState} from 'react'

const ListRender = () => {
  const [users, setUsers] = useState([
      {id: 1, name: "Tobias"}, 
      {id: 2, name: "Plinio"},
      {id: 3, name: "Alberto"}
    ]);  

  const deletaUltimo = (e) => {
    return setUsers(users.filter((user) => user.id !== users.length ))
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={deletaUltimo}>Deletar último item da lista</button>
    </div>
  )
}

export default ListRender