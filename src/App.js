import React, {Component} from 'react';
import './App.css';
import Person from './Components/Persons';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <Person name="Kamrul" age="26"></Person>
//       <Person name="Mahmudul" age="28"></Person>
//       <Person name="Bimol" age="29">CTO</Person>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Hello world</h1>
        <Person name="Kamrul" age="26"></Person>
        <Person name="Mahmudul" age="28"></Person>
        <Person name="Bimol" age="29">CTO</Person>
      </div>
    );
  }
}

export default App;
