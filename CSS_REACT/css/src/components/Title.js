import styles from './Title.module.css';

const Title = () => {
  return (
    <div>
       {/* Funciona apenas caso chamado dessa forma */}
       <h1 className={styles.my_title}>Testando CSS modules</h1> 

       {/* Dessa forma nao funciona */}
       <h1 className="my_title">Testando CSS modules</h1> 
    </div>
  )
}

export default Title