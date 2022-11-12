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

  changeBookName = () => {
    this.setState({
      books: [
        {bookName: "Animal Farm", writter: "George Orwell"},
        {bookName: "The Da Vinchi Code", writter: "Dan Brown"},
        {bookName: "Metmorphosis", writter: "Franz Kafka"}
      ]
    });
  }
  render(){
    return(
      <div className="App">
        <h1>Book List</h1>
        <button onClick={this.changeBookName}>Change Book Name</button>

        <Book bookName={this.state.books[0].bookName} writter={this.state.books[0].writter} />
        <Book bookName={this.state.books[1].bookName} writter={this.state.books[1].writter} />
        <Book bookName={this.state.books[2].bookName} writter={this.state.books[2].writter} />
      </div>
    );
  }
}

export default App;
