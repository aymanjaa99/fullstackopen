import React, { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);

  const [filtered, setFiltered] = useState([]);

  return (
    <>
      <Filter persons={persons} setFiltered={setFiltered} />
      <Form persons={persons} setPersons={setPersons} />
      <Persons filtered={filtered} persons={persons} />
    </>
  );
};

export default App;
