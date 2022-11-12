import React from "react";

const Book = props => {
    return(
        <div>
            <h3 onClick={props.change}>Book Name: {props.bookName}</h3>
            <h4>Writter: {props.writter}</h4>
        </div>
    );
}


export default Book;