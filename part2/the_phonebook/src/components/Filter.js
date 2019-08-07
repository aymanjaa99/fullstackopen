import React, { useState } from "react";

const Filter = ({ persons, setFiltered }) => {
  const [search, setSearch] = useState("");

  const filterItems = event => {
    let query = search;
    setSearch(event.target.value);
    let filteredPersons = persons.filter(
      element => element.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    return setFiltered(filteredPersons);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onChange={filterItems}
      />
    </div>
  );
};

export default Filter;
