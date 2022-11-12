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
  render(){
    return(
      <div className="App">
        <h1>Book List</h1>
        <button onClick={this.changeBookName.bind(this, "Nineteen Eighty-Four")}>Change Book Name</button>

        <Book
         bookName={this.state.books[0].bookName} 
         writter={this.state.books[0].writter} />
        <Book bookName={this.state.books[1].bookName}
         writter={this.state.books[1].writter} />
        <Book bookName={this.state.books[2].bookName}
         writter={this.state.books[2].writter}
         change = {this.changeBookName.bint(this, "Nineteen 84")} />
      </div>
    );
  }
}

export default App;
