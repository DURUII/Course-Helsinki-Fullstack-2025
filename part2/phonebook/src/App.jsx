import { useState } from 'react'
import { Filter, PersonForm, Persons } from './components'

const App = () => {
  // hardcoded dummy data
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchKey, setSearchKey] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    // note that persons is not an array of names
    if (persons.some(person => person.name === newName)) {
      // template string [javascript] instead of string concatenation [java]
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearchKeyChange = (event) => setSearchKey(event.target.value)

  // const [newSearchResults, setSearchResults] = useState(persons)
  // is redundant and no needed
  // searchResults is derived, pure, and auto-updating
  // because React re-renders whenever dependencies (persons, newSearchKey) change
  const filteredPersons = newSearchKey === ''
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(newSearchKey.toLowerCase())
    )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        newSearchKey={newSearchKey}
        handleSearchKeyChange={handleSearchKeyChange} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSearchKeyChange={handleNumberChange} />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App