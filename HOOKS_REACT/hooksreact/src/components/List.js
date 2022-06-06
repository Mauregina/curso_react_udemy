import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
  const [items, setItems] = useState([]);  

  useEffect(() => {
    console.log('Altera dados da lista');

    setItems(getItems);
  }, [getItems]);  

  return (
    <div>
        {items.map((item) => 
            <p key={item}>{item}</p>   
        )}
    </div>
    
  )
}

export default List;