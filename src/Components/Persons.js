import React, {Component} from "react";

// let Person = (props) => {
//     return(
//         <div>
//             <h2>I'm {props.name}</h2>
//             <p>My age is: {props.age}</p>
//             <small>{props.children}</small>
//         </div>
//     );
// }

class Person extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>I'm {this.props.name}</h2>
                <p>My age is: {this.props.age}</p>
                <small>{this.props.children}</small>
            </div>
        );
    }
}

export default Person;
