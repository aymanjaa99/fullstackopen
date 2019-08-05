import React from "react";

const Course = ({ course }) => {
  let total = course.parts.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    return accumulator + currentValue.exercises;
  }, 0);

  const _row = () => {
    return course.parts.map(c => (
      <li key={c.id}>
        {c.name} : {c.exercices !== null && c.exercises}
      </li>
    ));
  };
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {_row()}
        <li>
          Total of exercises: <strong>{total}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Course;
