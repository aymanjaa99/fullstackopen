import React, { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
import Country from "./components/Country";
function App() {
  const [countries, setCountries] = useState([]);

  if (countries === 1) {
    console.log("Countries: ", countries);
  }
  return (
    <>
      <Search setCountries={setCountries} />

      {countries.length === 1 ? (
        <Country country={countries[0]} />
      ) : (
        <List countries={countries} />
      )}
    </>
  );
}

export default App;
