const ChangeMessageState = ({ handleMessage }) => {
  return (
    <div>
        <button onClick={() => handleMessage("Ola")}>1</button>
        <button onClick={() => handleMessage("Tudo bem?")}>2</button>
        <button onClick={() => handleMessage("Desejas algo?")}>3</button>
    </div>
  )
}

export default ChangeMessageState