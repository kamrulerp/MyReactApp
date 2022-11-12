import React from "react";

let Person = (props) => {
    return(
        <div>
            <h2>I'm {props.name}</h2>
            <p>My age is: {props.age}</p>
            <small>{props.children}</small>
        </div>
    );
}

export default Person;
