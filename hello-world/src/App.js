import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'a1', name: 'Andy', age: 10},
      {id: 'a2', name: 'Bob', age: 11},
      {id: 'a3', name: 'Charlie', age: 12}
    ],
    showPersons: false
  }

  deletePersonHandler = (id) => {
     const persons = this.state.persons.slice();
     persons.splice(id, 1);
     this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World, bro!</h1>
        <p>This is my first react.js demo</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>
            Toggle Show
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
