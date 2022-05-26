const TemplateExpressions = () => {
    
    const nome = 'Maura'
    const dados = {
        idade: 35,
        profissao: "programadora"
    }

    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <p>Idade: {dados.idade}</p>
            <p>Profissao: {dados.profissao}</p>
            <p>{10+30}</p>
        </div>
    )
}

export default TemplateExpressions