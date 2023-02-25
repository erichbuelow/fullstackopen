import { useState } from 'react'

const Button = (props) => (

  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function App() {
  const [value, setValue] = useState(0)
  return (
    <div>
      {value}
      <Button handleClick={() => {setValue(1000)}} text="thousand" />
    </div>
  )

}

export default App;
