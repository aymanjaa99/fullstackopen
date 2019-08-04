import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + bad + neutral;
  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <Button text="Good" handleClick={() => setGood(good + 1)} />
        <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <h1>statistics</h1>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
