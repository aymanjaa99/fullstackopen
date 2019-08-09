import React, { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
import Country from "./components/Country";
function App() {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState([]);

  return (
    <>
      <Search setCountries={setCountries} />

      {countries.length === 1 ? (
        <Country country={countries} />
      ) : (
        <List countries={countries} />
      )}
    </>
  );
}

export default App;
