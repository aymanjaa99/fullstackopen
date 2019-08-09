import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = ({ countries, setCountries }) => {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const fetch_data = () => {
    let source = axios.CancelToken.source();
    if (query !== "") {
      axios
        .get("https://restcountries.eu/rest/v2/name/" + query, {
          cancelToken: source.token
        })
        .then(response => {
          setCountries(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      return () => source.cancel();
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
