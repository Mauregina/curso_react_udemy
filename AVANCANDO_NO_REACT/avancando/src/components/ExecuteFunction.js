const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <h1>Executando função como Prop</h1>
        <button onClick={myFunction}>CLique aqui para executar função</button>
    </div>
  )
}

export default ExecuteFunction