import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return ( 
        <div>
            {/*Algum comentario*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;