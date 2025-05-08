import Note from './components/Note'
import { useState } from "react"

const App = (props) => {
  // React Developer Tools may be helpful
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    // prevent the default action of submitting a form
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    // a new copy of the array 
    // with the new item added to the end
    setNotes(notes.concat(noteObject))
    setNewNote('')
    // console.log('button clicked', event.target)
  }

  // input value + onChange event [controlled component]
  // the uncontrolled style is to use a ref, and handle the onClick event
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  // conditional operator
  const notesToShow = showAll ?
    notes :
    notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)} >
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App