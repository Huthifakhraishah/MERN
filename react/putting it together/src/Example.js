import React, { Component } from 'react'

export class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age ,
            count : 1
        };
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastname} , {this.props.firstname}</h1>
                <p>Age : {this.state.age}</p>
                <button onClick={ () => { this.setState({age: parseInt(this.props.age) + parseInt(this.state.count++)}) } }>birthday button for {this.props.firstname} {this.props.lastname}</button>
                <p>Hair Color : {this.props.haircolor}</p>
            </div>
        )
    }
}

export default Example
