import React from "react";

const Course = ({ course }) => {
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
      {_row()}
    </div>
  );
};

export default Course;
