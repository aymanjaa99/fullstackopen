import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral;
  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>all: {all} </p>
          <p>Average: {all / 3}</p>
          <p>
            Positive feeback: {isNaN(good / all) ? "0" : (good / all) * 100} %
          </p>
        </div>
      </>
    );
  }
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <Button text="Good" handleClick={() => setGood(good + 1)} />
        <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
