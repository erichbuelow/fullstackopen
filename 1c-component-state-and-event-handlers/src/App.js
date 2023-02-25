import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [count, setCount] = useState(0)

  const increaseByOne = () => setCount(count + 1)
  const decreaseByOne = () => setCount(count - 1)
  const setToZero = () => setCount(0)


  return (
    <div>
      <Display counter={count}></Display>
      <Button onClick={increaseByOne} text="Add"></Button>
      <Button onClick={decreaseByOne} text="Remove"></Button>
      <Button onClick={setToZero} text="Reset"></Button>
    </div>
  );
}

export default App
