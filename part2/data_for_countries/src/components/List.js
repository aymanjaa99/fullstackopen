import React from "react";

const List = ({ countries }) => {
  let countries_list = countries.map(country => (
    <li key={country.numericCode}>{country.name}</li>
  ));

  return <div>{countries_list}</div>;
};

export default List;
