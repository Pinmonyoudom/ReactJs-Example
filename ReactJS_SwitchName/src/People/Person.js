//ECMAScript 6 (ES6)

// + Classes
// + Arrow Functions
// + Variables (let, const, var)

import React from 'react';
import './Person.css'

// const person = function(){             SAME ah krom

const person = (props) => {
    // return <p> Your Age is: {Math.floor(Math.random() * 40)} years old. </p>
    // return <p> You're {props.name} ,{props.age} years old. </p>

    return (
        <div className="Person">    
            <p onClick={props.click}> You're {props.name} ,{props.age} years old. </p>
            <p> {props.children} </p> 
            <input type="text" onChange={props.changed} value={props.name} />

        </div>
    )

};

export default person;