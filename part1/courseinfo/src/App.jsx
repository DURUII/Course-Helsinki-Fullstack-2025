const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p> {props.part.name} {props.part.exercises} </p>
    </>
  )
}

const Content = (props) => {
  const components = props.parts.map(part => {
    return (<Part part={part} />)
  })
  return (<> {components} </>)
}


const Total = (props) => {
  let num = 0
  props.parts.forEach(part => {
    num += part.exercises
  })
  return (
    <>
      <p> Number of exercises {num} </p>
    </>
  )
}



const App = () => {
  // Let's move forward to using objects
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  // pass them directly as an array
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App