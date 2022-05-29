import React from 'react'

const Container = ({children, parametro}) => {
  return (
    <div>
        <h1>Título do Container</h1>
        {children}
        <p>{parametro}</p>
    </div>
  )
}

export default Container