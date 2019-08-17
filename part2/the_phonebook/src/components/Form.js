import React, { useState } from "react";
import personService from "../services/persons";
import Notification from "./Notification";
const Form = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [notification, setNotification] = useState(null);

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
  const handleChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
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

      personService.create(person).then(res => {
        setPersons(persons.concat(res));

        setNewNumber("");
      });

      setNotification(
        `${person.name} has been successfully added to your phonebook`
      );
      setTimeout(() => setNotification(null), 5000);
    }
  };
  return (
    <div>
      <h2>Add a new</h2>
      {notification !== "null" && <Notification notification={notification} />}
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
  );
};

export default Form;
