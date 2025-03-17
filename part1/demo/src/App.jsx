import { useState } from 'react'

const App = () => {
  // The convention is to name state variables like 
  // [something, setSomething] using array destructuring.
  // useState is a Hook, so you can only call it 
  // at the top level of your component or your own Hooks. 
  const [counter, setCounter] = useState(0)

  // The set function that lets you change 
  // it to any other value in response to interaction.
  setTimeout(
    // arrow function again
    // Calling the set function does not 
    // change the current state 
    // in the already executing code
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App