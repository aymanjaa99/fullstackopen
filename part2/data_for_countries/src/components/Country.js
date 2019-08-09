import React, { useState } from "react";

const Country = ({ country }) => {
  //

  const list_languages = () => {
    return country[0].languages.map(language => (
      <li key={language.iso639_2}>
        {language.name} / {language.nativeName}
      </li>
    ));
  };
  return (
    <div>
      <h1>{country[0].name}</h1>
      <p>Capital: {country[0].capital}</p>
      <p>
        population:{" "}
        {new Intl.NumberFormat("de-De").format(country[0].population)}
      </p>

      <h2>Languages:</h2>
      <ul>{list_languages()}</ul>
      <div>
        <img src={country[0].flag} alt={"Flag of " + country[0].name} />
      </div>
    </div>
  );
};

export default Country;

// TODO add languages list support
