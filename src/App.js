import React, { Component } from 'react';
import Person from './components/Person/Person'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: "Manyu", age:'22'},
        {name: "Reggi", age:'21'},
        {name: "Ripal", age:'23'}
      ]
    }
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: "Abimanyu", age:'22'},
        {name: "Reggi", age:'21'},
        {name: "Ripal", age:'25'}
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Watching TWICE</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>  
    );
  }
}

export default App;
