import React, {Component} from 'react';
import './App.css';
import Book from './Components/Book';

class App extends Component {

  state = {
    books: [
      {bookName: "1984", writter: "George Orwell"},
      {bookName: "The Da Vinchi Code", writter: "Dan Brown"},
      {bookName: "The Alchemist", writter: "Paulo Coelho"}
    ]
  }

  changeBookName = newBookName => {
    this.setState({
      books: [
        {bookName: newBookName, writter: "George Orwell"},
        {bookName: "The Da Vinchi Code", writter: "Dan Brown"},
        {bookName: "Metmorphosis", writter: "Franz Kafka"}
      ]
    });
  }

  changeWithInputState = event => {
    this.setState({
      books: [
        {bookName: event.target.value, writter: "George Orwell"},
        {bookName: "The Da Vinchi Code", writter: "Dan Brown"},
        {bookName: "Metmorphosis", writter: "Franz Kafka"}
      ]
    });
  }

  render(){
    const style ={
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };

    return(
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.changeBookName.bind(this, "Nineteen Eighty-Four")}>Change Book Name</button>

        <input type="text" onChange={this.changeWithInputState} />

        <Book
         bookName={this.state.books[0].bookName} 
         writter={this.state.books[0].writter} 
         inputName = {this.changeWithInputState}/>
        <Book bookName={this.state.books[1].bookName}
         writter={this.state.books[1].writter}/>
        <Book bookName={this.state.books[2].bookName}
         writter={this.state.books[2].writter}
         change = {this.changeBookName.bind(this, "Nineteen 84")} />
      </div>
    );
  }
}

export default App;
