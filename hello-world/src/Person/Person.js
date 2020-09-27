import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name}, I'am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="type" onChange={props.changed}/>
    </div>
  )
};

export default person;
