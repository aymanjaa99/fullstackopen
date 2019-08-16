import React from "react";
import personsService from "../services/persons";
const Persons = ({ filtered, persons }) => {
  const removePerson = id => {
    if (
      window.confirm("Are you sure you want to permanently delete this person?")
    ) {
      personsService.delete(id).then(() => {
        let removeIndex = persons.map(p => p.id).indexOf(id);
        persons.splice(removeIndex, 1);
      });
    }
  };
  const row = () => {
    if (filtered.length === 0 || filtered === null || filtered === []) {
      return persons.map(person => (
        <div key={person.name}>
          <li>
            {person.name} : {person.number}
          </li>
          <button onClick={() => removePerson(person.id)} />
        </div>
      ));
    } else {
      return filtered.map(person => (
        <div key={person.name}>
          <li>
            {person.name} : {person.number}
          </li>
          <button onClick={() => removePerson(person.id)} />
        </div>
      ));
    }
  };
  return (
    <div>
      <h2>Numbers</h2>
      <ul>{row()}</ul>
    </div>
  );
};

export default Persons;
