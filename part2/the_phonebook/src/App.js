import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    personService.getAll().then(initialNotes => {
      setPersons(initialNotes);
    });
  }, [persons]);
  return (
    <>
      <Filter persons={persons} setFiltered={setFiltered} />
      <Form persons={persons} setPersons={setPersons} />
      <Persons filtered={filtered} persons={persons} />
    </>
  );
};

export default App;
