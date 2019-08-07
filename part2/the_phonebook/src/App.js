import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const isNamePresent = () => {
    let name = newName;
    let present = null;
    persons.map(p => {
      if (p.name === name) {
        return (present = true);
      } else {
        return (present = false);
      }
    });
    return present;
  };
  const handleSubmit = event => {
    event.preventDefault();
    let name = newName;
    let number = newNumber;
    if (isNamePresent()) {
      alert("name already present");
    } else {
      let person = {
        name: name,
        number: number
      };
      setPersons(persons.concat(person));
      console.log("DONE! : ", persons);
    }
  };

  const handleChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };
  const row = () => {
    if (filtered.length === 0 || filtered === null || filtered === []) {
      return persons.map(person => <li key={person.name}>{person.name}</li>);
    } else {
      return filtered.map(person => <li key={person.name}>{person.name}</li>);
    }
  };
  const filterItems = event => {
    let query = search;
    setSearch(event.target.value);
    let filteredPersons = persons.filter(
      element => element.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    return setFiltered(filteredPersons);
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <input
          type="text"
          className="input"
          placeholder="Search..."
          onChange={filterItems}
        />
      </div>
      <div>
        <h2>Add a new</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input value={newName} onChange={handleChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        <ul>{row()}</ul>
      </div>
    </>
  );
};

export default App;
