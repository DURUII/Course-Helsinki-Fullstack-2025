import { useState } from 'react'

const Title = ({ text }) => {
  return <div>
    <h1>{text}</h1>
  </div>
}

const Button = ({ text, onClick }) => {
  return <>
    <button onClick={onClick}>{text}</button>
  </>
}

const Display = ({ text, value }) => {
  return <div>
    {text} {value}
  </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral

  return (
    <div>
      <Title text='give feedback'></Title>
      <Button text='good' onClick={() => setGood(good + 1)}></Button>
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)}></Button>
      <Button text='bad' onClick={() => setBad(bad + 1)}></Button>
      <Title text='statistics'></Title>
      <Display text='good' value={good}></Display>
      <Display text='neutral' value={neutral}></Display>
      <Display text='bad' value={bad}></Display>
      <Display text='all' value={all}></Display>
      <Display text='average' value={(good - bad) / all}></Display>
      <Display text='positive' value={good / all * 100 + '%'}></Display>
    </div>
  )
}

export default App