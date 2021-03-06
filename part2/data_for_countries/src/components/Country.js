import React from "react";
import Weather from "./Weather";
const Country = ({ country }) => {
  //
  if (country.length === 1) {
    return (country = country[0]);
  }
  const list_languages = () => {
    console.log("Country: ", country.languages);
    return country.languages.map(language => (
      <li key={language.iso639_2}>
        {language.name} / {language.nativeName}
      </li>
    ));
  };
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>
        population: {new Intl.NumberFormat("de-De").format(country.population)}
      </p>

      <h2>Languages:</h2>
      <ul>{list_languages()}</ul>
      <div>
        <img
          src={country.flag}
          alt={"Flag of " + country.name}
          className="flag"
        />
      </div>
      <div>
        <h2> Weather in {country.capital}</h2>
        <Weather capital={country.capital} />
      </div>
    </div>
  );
};

export default Country;

// TODO add languages list support
