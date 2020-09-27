import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andy', age: 10},
      { name: 'Bob', age: 11},
      { name: 'Charlie', age: 12}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Ali', age: 20},
        { name: 'Budi', age: 21},
        { name: 'Cecep', age: 22}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Ali', age: 20},
        { name: event.target.value, age: 21},
        { name: 'Cecep', age: 22}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello World, bro!</h1>
        <p>This is my first react.js demo</p>
        <button
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}>
            My hobbies is racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
