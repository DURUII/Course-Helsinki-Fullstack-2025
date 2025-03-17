import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  // An event handler is a function
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => { setCounter(counter + 1) }}>
        plus
      </button>
      <button onClick={() => { setCounter(0) }}>
        zero
      </button>
    </>
  )
}

export default App