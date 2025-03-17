import { useState } from 'react'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}

function findMaxIndex(array) {
  let bossValue = -1
  let bossIndex = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] > bossValue) {
      bossValue = array[i]
      bossIndex = i
    }
  }
  return bossIndex
}

const Button = ({ text, onClick }) => {
  return <><button onClick={onClick}>{text}</button></>
}

const Title = ({ text }) => {
  return <div>
    <h1>{text}</h1>
  </div>
}

const AnecdoteLine = ({ text, voteNum }) => {
  return <div>
    <div>{text}</div>
    <div>has {voteNum} votes</div>
  </div>
}

const Section = ({ title, anecdotes, votes, index }) => {
  return (
    <div>
      <Title text={title}></Title>
      <AnecdoteLine text={anecdotes[index]} voteNum={votes[index]} ></AnecdoteLine>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  // console.log('votes', votes)

  const voteHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Section title='Anecdote of the day'
        anecdotes={anecdotes} votes={votes}
        index={selected}
      ></Section>

      <div>
        <Button text='vote' onClick={voteHandler}></Button>
        <Button text='next anecdote' onClick={() => {
          setSelected(getRandomInt(0, anecdotes.length))
        }}></Button>
      </div>

      <Section title='Anecdote with most votes'
        anecdotes={anecdotes} votes={votes}
        index={findMaxIndex(votes)}
      ></Section>

    </div >
  )
}

export default App