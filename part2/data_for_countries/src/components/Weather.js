import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.apixu.com/v1/current.json?key=36da8b83e4394ab391f191024190908&q=" +
          capital
      )
      .then(({ data }) => setWeatherData(data))
      .catch(error => console.log(error));
  }, [capital]);

  const data = weatherData.current;

  return (
    <>
      {data && (
        <div>
          <p>
            <b>temperature:</b> {Math.round(data.temp_c)} Celsius:
            <b> {data.condition.text} </b>
          </p>
          <p>
            <img src={data.condition.icon} alt="weather icon" />
          </p>
          <p>
            <b>wind:</b> {data.wind_kph} Km/h
          </p>
        </div>
      )}
    </>
  );
};

export default Weather;
