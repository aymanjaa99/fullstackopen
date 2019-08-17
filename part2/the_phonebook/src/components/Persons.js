import React, { useState } from "react";
import personsService from "../services/persons";
import Notification from "./Notification";
const Persons = ({ filtered, persons }) => {
  const [notification, setNotification] = useState(null);
  const removePerson = id => {
    if (
      window.confirm("Are you sure you want to permanently delete this person?")
    ) {
      personsService
        .delete(id)
        .then(() => {
          let removeIndex = persons.map(p => p.id).indexOf(id);
          persons.splice(removeIndex, 1);
        })
        .catch(res => {
          setNotification(
            "The persons has already been removed from our server"
          );

          setTimeout(() => setNotification(null), 5000);
        });
    }
  };
  const row = () => {
    if (filtered.length === 0 || filtered === null || filtered === []) {
      return persons.map(person => (
        <div key={person.name}>
          <li className="button">
            {person.name} : {person.number}
          </li>
          <button onClick={() => removePerson(person.id)}>delete</button>
        </div>
      ));
    } else {
      return filtered.map(person => (
        <div key={person.name}>
          <li className="button">
            {person.name} : {person.number}
          </li>
          <button onClick={() => removePerson(person.id)}>delete</button>
        </div>
      ));
    }
  };
  return (
    <div>
      <h2>Numbers</h2>
      {notification !== "null" && (
        <Notification notification={notification} type="error" />
      )}
      <ul>{row()}</ul>
    </div>
  );
};

export default Persons;
