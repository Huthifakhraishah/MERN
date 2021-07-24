import React from 'react'

const Example=props=>{
    return (
        <div>
            <h1>{props.lastname} , {props.firstname}</h1>
            <p>Age : {props.age}</p>
            <p>Hair Color : {props.haircolor}</p>
        </div>
    )
}


export default Example
