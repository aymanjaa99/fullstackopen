import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

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
    if (isNamePresent()) {
      alert("name already present");
    } else {
      let person = {
        name: name
      };
      setPersons(persons.concat(person));
      console.log("DONE!");
    }
  };

  const handleChange = event => {
    setNewName(event.target.value);
  };

  const row = () => {
    return persons.map(person => <li key={person.name}>{person.name}</li>);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{row()}</ul>
    </div>
  );
};

export default App;
