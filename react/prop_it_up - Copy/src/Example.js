import React, { Component } from 'react'

export class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age 
        };
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastname} , {this.props.firstname}</h1>
                <p>Age : {this.state.age}</p>
                <button onClick={ () => { this.setState({age: int(this.props.age) + int(1)}) } }>increase age </button>
                <p>Hair Color : {this.props.haircolor}</p>
            </div>
        )
    }
}

export default Example
