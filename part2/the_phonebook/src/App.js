import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetch_persons = () => {
    //console.log("Persons: ", persons);
    axios.get("http://localhost:3001/persons").then(response => {
      console.log("success");
      let data = response.data;
      setPersons(data);
    });
  };

  useEffect(fetch_persons, []);
  return (
    <>
      <Filter persons={persons} setFiltered={setFiltered} />
      <Form persons={persons} setPersons={setPersons} />
      <Persons filtered={filtered} persons={persons} />
    </>
  );
};

export default App;
