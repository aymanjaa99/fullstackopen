import React from "react";

const Persons = ({ filtered, persons }) => {
  const row = () => {
    if (filtered.length === 0 || filtered === null || filtered === []) {
      return persons.map(person => (
        <li key={person.name}>
          {person.name} : {person.number}
        </li>
      ));
    } else {
      return filtered.map(person => (
        <li key={person.name}>
          {person.name} : {person.number}
        </li>
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
