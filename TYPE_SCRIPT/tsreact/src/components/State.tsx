import { ChangeEvent, useState } from 'react'

const State = () => {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
        <h2>useState com TypeScript</h2>
        <p>O texto é: {text}</p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State;