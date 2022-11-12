import React from "react";

const Book = props => {
    return(
        <div>
            <h3>Book Name: {props.bookName}</h3>
            <h4>Writter: {props.writter}</h4>
        </div>
    );
}


export default Book;