import styles from './FrutaDetalhe.module.css'

const FrutaDetalhe = ({nome, preco, qtd}) => {
  return (
    <div className={styles.card}>
        <h1>{nome}</h1>
        <p>Preco: {preco}</p>
        <p>Qtde: {qtd}</p>
    </div>
  )
}

export default FrutaDetalhe