import React from 'react'

interface Props {
    title: string;
    content: string;
    commentQty: number;
    tags: string[];

    category: Category;
}

export enum Category {
  JS = "JavaScript",
  P = "Python"
}

const Destructuring = ({title, content, commentQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
            {tags.map((tag)=> (
                <span>#{tag}</span>                    
            ))}
        <p>Categoria: {category}</p>
        </div>
    </div>
  )
}

export default Destructuring;