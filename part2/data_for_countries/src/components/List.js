import React, { useState } from "react";
import Country from "./Country";

const List = ({ countries }) => {
  const [show, setShow] = useState([]);

  const handleClick = country => {
    let id = country.numericCode;
    if (show.includes(id)) {
      let copy = show.splice(1, 0, id);
      setShow(copy);
    } else {
      setShow(show.concat(id));
    }
  };

  let countries_list = countries.map(country => (
    <div key={country.name}>
      <li key={country.numericCode}>{country.name}</li>
      <button onClick={() => handleClick(country)}>show</button>
      {show.includes(country.numericCode) ? <Country country={country} /> : ""}
    </div>
  ));

  return <div>{countries_list}</div>;
};

export default List;
