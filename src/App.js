import React, { Component } from 'react';
//import React, { useState } from 'react';
import Person from './Person/Person';
//import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components'

import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'white' : '#000204'};
  color: darkred;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    color: darkred;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Ryan', age: 29 },
      { id: '2', name: 'Beverly', age: 30},
      { id: '3', name: 'Pete', age: 50}
    ],
    showPerson: false
  }

  // handleClick = (newName) => {
  //   this.setState({
  //     persons:[
  //       { name: 'Ryan', age: 29 },
  //       { name: 'Bevely', age: 31},
  //       { name: 'Pete', age: 50}
  //     ] 
  //   })
  // }

  toggleClick = () => {
    const show = this.state.showPerson;
    this.setState({showPerson: !show});
  }

  nameChangedHandleClick = (e, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex]
    };

    //Or const person = Object...........assign({}, this.state.persons.person[personIndex])

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );

    }

  //   this.setState( {
  //     persons: [
  //       { name: 'Luc', age: 29 },
  //       { name: e.target.value, age: 31},
  //       { name: 'Pete', age: 50}

  //     ]
  //   })
  // }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    //or this.state.persons.slice()
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
              click={()=> this.deletePerson(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(e) => this.nameChangedHandleClick(e, person.id)}
            />
        })}
      </div>
      );
      // style.backgroundColor = 'white'
      // style.color = 'black'
      // style[':hover'] = {
      //   backgroundColor: 'black',
      //   color: 'whitesmoke'
      // }
    }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('white');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <h1>React</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <StyledButton
            alt= {this.state.showPerson}
            onClick={() => this.toggleClick()}>Switch
          </StyledButton>
            {persons}
        </div>
      
    );
  }
}

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Ryan', age: 29 },
//       { name: 'Beverly', age: 30},
//       { name: 'Pete', age: 50}
//     ]
//   });

//   const handleClick = () => {
//      setPersonsState({
//         persons:[
//           { name: 'Luc', age: 29 },
//           { name: 'Bevely', age: 31},
//           { name: 'Pete', age: 50}
//         ] 
//       })
//     }
    

//   return (
//     <div className="App">
//       <h1>React</h1>
//       <button onClick={handleClick}>Switch</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Cars</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       <p>JSX</p>
//     </div>
//   );


/******************************************************************************/ 
  //conditional rendering
// { this.state.showPerson ? 
//   <div>
//     <Person 
//       name={this.state.persons[0].name} 
//       age={this.state.persons[0].age}/>
//     <Person 
//       name={this.state.persons[1].name} 
//       age={this.state.persons[1].age}
//       click={this.handleClick.bind(this, 'Robby')}
//       changed={this.nameChangedHandleClick}>Hobbies: Cars</Person>
//     <Person 
//       name={this.state.persons[2].name} 
//       age={this.state.persons[2].age}/>
//     </div> : null }

export default App;