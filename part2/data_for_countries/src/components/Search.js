import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = ({ countries, setCountries }) => {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const fetch_data = () => {
    console.log("fetching data");
    if (query !== "") {
      axios
        .get("https://restcountries.eu/rest/v2/name/" + query)
        .then(response => {
          setTimeout(() => setCountries(response.data), 2000);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
    }
  };

  useEffect(fetch_data, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="type the name of the country here"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
