import React, { Component } from 'react'

export default class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <>
            <h1>Count is : {this.state.counter}</h1>
            <button onClick={this.increment}>Increment</button>
        </>
    }
}