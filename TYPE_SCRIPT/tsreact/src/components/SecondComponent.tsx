import React from 'react'

interface Props {
    name: string;
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Nome: {props.name}</p>
    </div>
  )
}

export default SecondComponent;