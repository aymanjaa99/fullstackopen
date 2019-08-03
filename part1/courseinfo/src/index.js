import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Part = props => {
  console.log(props);
  return (
    <p>
      {" "}
      {props.name} {props.exercises}{" "}
    </p>
  );
};
const Content = props => {
  return (
    <div>
      <Part
        name={props.parts.part1.name}
        exercises={props.parts.part1.exercises}
      />
      <Part
        name={props.parts.part2.name}
        exercises={props.parts.part2.exercises}
      />
      <Part
        name={props.parts.part3.name}
        exercises={props.parts.part3.exercises}
      />
    </div>
  );
};

const Total = props => {
  return <p>Number of exercises {props.sum}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={{ part1, part2, part3 }} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
