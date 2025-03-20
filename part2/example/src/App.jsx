// The period - . - in the beginning 
// refers to the current directory
// The filename extension .jsx can be omitted.
import Note from "./components/Note"

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
