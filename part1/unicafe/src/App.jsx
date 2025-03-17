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

const StatisticLine = ({ text, value }) => {
  // here is the magic of reusable component
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral
  if (all === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good}></StatisticLine>
        <StatisticLine text='neutral' value={neutral}></StatisticLine>
        <StatisticLine text='bad' value={bad}></StatisticLine>
        <StatisticLine text='all' value={all}></StatisticLine>
        <StatisticLine text='average' value={(good - bad) / all}></StatisticLine>
        <StatisticLine text='positive' value={good / all * 100 + '%'}></StatisticLine>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text='give feedback'></Title>
      <Button text='good' onClick={() => setGood(good + 1)}></Button>
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)}></Button>
      <Button text='bad' onClick={() => setBad(bad + 1)}></Button>
      <Title text='statistics'></Title>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

export default App