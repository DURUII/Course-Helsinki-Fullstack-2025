// a reusable component, 
// to distinguish it from a HTML tag, the 
// first letter of the name is capitalized
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, {props.age} years old</p>
    </div>
  )
}


// the component is a JavaScript function, taking no parameters
// the arrow function syntax is ECMAScript 6 (ES6) feature
// the convention is that App is the root component of the application
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  // console.log('Hello from component')

  // JSX: JavaScript-embedded XML (e.g. <br> is not valid in JSX)
  // N.B. the curly braces are used to embed JavaScript expressions
  return (
    // usually a root element is used to wrap the content
    // e.g. a div element
    // N.B. the item to be rendered must be a (an array of) primitive value or React component
    <>
      <Hello name='World' age={16 + 89} />
      <Hello name='DURUII' age='23' />
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} plus {b} equals {a + b}</p>
      <br />
    </>
  )
}

export default App