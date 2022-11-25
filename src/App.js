import React, {Component} from 'react';
import './App.css';
import Book from './Components/Book';

class App extends Component {

  state = {
    books: [
      {id: 1, bookName: "1984", writter: "George Orwell"},
      {id: 2, bookName: "The Da Vinchi Code", writter: "Dan Brown"},
      {id: 3, bookName: "The Alchemist", writter: "Paulo Coelho"}
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

  deleteBookState = (index) => {
    //const books = this.state.books.slice();
    //const books = this.state.books.map(item);
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books : books
    });
  }


  render(){
    const style ={
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };

    const booksStates = this.state.books;
    const books = booksStates.map((book,index) =>{
      return(
        <Book 
          bookName={book.bookName}
          writter = {book.writter}
          deleteState = {() => this.deleteBookState(index)}
          key = {book.id}
        />
      );
    });

    return(
      <div className="App">
        <h1 style={style}>Book List</h1>
        {books}
        
      </div>
    );
  }
}

export default App;
