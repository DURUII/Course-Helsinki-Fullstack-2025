import { useState } from "react"

const App = () => {
  // The component's state or a piece of its state can be of any type. 
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    // object spread syntax 
    // it is forbidden in React to mutate state directly,
    const newClicks = {
      ...clicks, // create a copy of the `clicks` object
      left: clicks.left + 1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App