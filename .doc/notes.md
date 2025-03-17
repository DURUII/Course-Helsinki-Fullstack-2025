# Part 00 Fundamentals of Web apps

| Console | Sequence | Sequence |
|-|-|-|
| ![](img/01-console.png) | ![](img/01-seq-mermaid.png) | ![](img/01-seq-mermaid2.png) |

- [x] **The 1st rule of web development**: Always keep the **Developer Console** (F12) open on your web browser. Make sure that the Network tab is open, and check the `Disable cache` option as shown. Separate the things you want to log to the console with a `comma`. `Preserve log` can also be useful (it saves the logs printed by the application when the page is reloaded) as well as `Hide extension URLs`(hides requests of any extensions installed in the browser, not shown in the picture above). Install `JSONView` on Chrome. 
- [x] We can think of HTML pages as implicit tree structures. Document Object Model, or DOM, is an Application Programming Interface (API) that enables programmatic modification of the element trees corresponding to web pages. You can access the `document` object by typing document into the `Console tab`! 
- [x] The Form tag has attributes `action` and method, which define that submitting the form is done as an `HTTP POST` request to the address `new_note`. Data is sent as the `body` of the POST request. `AJAX (Asynchronous JavaScript and XML)`  allows dynamic content updates on parts of a webpage without the need to rerender the full page. The `default` method would send the data to the server and cause a new `GET` request, **which we don't want to happen**. SPA-style websites don't fetch all of their pages separately from the server, but instead manipulate the contents of with JavaScript that executes in the browser. For example, the SPA version of the app does not traditionally send the form data:
```javascript
var form = document.getElementById('notes_form')
form.onsubmit = function(e) {
  e.preventDefault()

  var note = {
    content: e.target.elements[0].value,
    date: new Date(),
  }

  notes.push(note)
  e.target.elements[0].value = ''
  redrawNotes()
  sendToServer(note)
}
```
- Writing HTML amid the code is of course not smart, but for old-school PHP programmers, it was a normal practice. 
```javascript
const getFrontPageHtml = noteCount => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div class='container'>
          <h1>Full stack example app</h1>
          <p>number of notes created ${noteCount}</p>
          <a href='/notes'>notes</a>
          <img src='kuva.png' width='200' />
        </div>
      </body>
    </html>
`
}

app.get('/', (req, res) => {
  const page = getFrontPageHtml(notes.length)
  res.send(page)
})
```
- The mechanism of invoking event handlers is very common in JavaScript. Event handler functions are called callback functions.

# Part 01 Introduction to React

- [x] Proceed in small steps
- [x] Do Not Define Components Within Components
- [x] An event handler is a `function`, not a string, or assignment, or function call (except function that returns a function since it can be utilized in defining generic functionality that can be customized with parameters. ) ... Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- [x] It is forbidden in React to mutate state directly, since it can result in unexpected side effects. Don't use `push`. Even if mutating state appears to work in some cases, it can lead to problems that are very hard to debug.
- [x]A state update in React happens `asynchronously`, i.e. not immediately but "at some point" before the component is rendered again.
- [x] Every now and then we do get to write a line or two of new code, but a large part of our time is spent trying to figure out why something is broken or how something works.
- [x] The `useState` function (as well as the `useEffect` function introduced later on in the course) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component.
- [x] When using language models, the responsibility always stays with the programmer.
- Since Node.js is a JavaScript runtime environment, you may use `node name_of_file.js` or `node`. Alternatively, you can use a tool like [JS Bin](https://jsbin.com/?html,console).
- During this course the use of var is ill-advised and you should stick with using const and let!
- The contents of the object it references can still be modified. Think of it like changing the furniture inside a house, while the address of the house remains the same.
- One characteristic of the functional programming paradigm is the use of immutable data structures. In React code, it is preferable to use the method `concat`, which creates a new array with the added item. This ensures the original array remains unchanged.
- One very common method of defining objects is using object literals. The properties of an object are referenced by using the "dot" notation, or by using brackets (with space character). 
- The arrow function feature was added to JavaScript in 2015, with version ES6. Before this, the only way to define functions was by using the keyword `function`. You can define the function is by using a `function expression`. During this course, we will define all functions using the arrow syntax.
- There is no `class` mechanism in JavaScript. JavaScript essentially only defines the types Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object. There are, however, features to make "simulating" object-oriented classes possible. However, since we are using the new `Hooks` feature of React throughout this course, we have no concrete use for JavaScript's class syntax. 
- When calling the method through a reference, the method loses knowledge of what the original `this` was. Contrary to other languages, in JavaScript the value of this is defined based on `how the method is called`. When calling the method through a reference, the value of this becomes the so-called global object and the end result is often not what the software developer had originally intended. There are several mechanisms by which the original this can be preserved. One of these is using a method called `bind`. In this course, we avoid these issues by using `this-less` JavaScript.
- JavaScript materials: Mozilla's [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for official references, [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) book series for deep understanding, [javascript.info](https://javascript.info/) for structured learning, [Eloquent JavaScript](https://eloquentjavascript.net/) for a mix of theory and practice, [Namaste JavaScript](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP) for in-depth explanations, and [egghead.io](https://egghead.io/) for quality video tutorials (some behind a paywall).
- In Java programming, defining a function within another function can be complex and is uncommon. However, in JavaScript, defining functions within functions is a common and efficient practice.

# Part 02 Communicating with server

# Part 03 Programming a server with NodeJS and Express

# Part 04 Testing Express servers, user administration

# Part 05 Testing React apps

# Part 06 Advanced state management

# Part 07 React router, custom hooks, styling app with CSS and webpack

# Part 08 GraphQL

# Part 09 TypeScript

# Part 10 React Native

# Part 11 CI/CD

# Part 12 Containers

# Part 13 Using relational databases