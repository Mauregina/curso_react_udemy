const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Clicou!")
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>VERDADEIRO</h1>
        } else {
            return <h1>FALSO</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
                <button onClick={() => console.log("Funcao simples")}>Clique funcao simples</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events