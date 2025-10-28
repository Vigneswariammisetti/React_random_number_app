import React, { Component } from "react";

export class RandomNumber extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  generateRandomNumber() {
    // Generate random number between 1 and 100
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState({ number: randomNum });
  }

  render() {
    return (
      <div>
        <h2> Random Number Generator</h2>
        <p>Number: {this.state.number}</p>

        {/* Using arrow function inside render (2nd method) */}
        <button onClick={() => this.generateRandomNumber()}>
          Generate Random Number
        </button>
      </div>
    );
  }
}

export default RandomNumber;
