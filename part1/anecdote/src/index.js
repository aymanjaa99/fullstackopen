import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const _handleClick = (min, max) => {
    console.log("_handleClick called");
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    setSelected(randomNumber);
    console.log("random number: ", randomNumber, " || selected: ", selected);
  };

  const _voteOnAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;

    setVotes(copy);
    console.log(votes);
  };

  let mostVotes = Math.max.apply(Math, votes);
  let mostVotedIndex = votes.indexOf(mostVotes);

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          <p>{props.anecdotes[selected]}</p>
          <p>this anecdote has {votes[selected]} votes</p>
          <div>
            <button onClick={() => _handleClick(0, props.anecdotes.length)}>
              next anecdote
            </button>
            <button onClick={_voteOnAnecdote}>vote</button>
          </div>
        </div>
      </div>
      <div>
        <h1>Most voted anecdote</h1>
        <div>
          <p>{props.anecdotes[mostVotedIndex]}</p>
          <p>this anecdote has {mostVotes} votes</p>
        </div>
      </div>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
