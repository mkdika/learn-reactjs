import React from 'react';

const person = (props) => {
  return (
    <div>
      <h3>I'm {props.name}, I'am {props.age} years old!</h3>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
