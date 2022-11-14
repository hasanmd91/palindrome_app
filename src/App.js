import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = { data: "", palindrome: "" };

  inputHandeler = (e) => {
    this.setState({ data: e.target.value });
  };
  resethandeler = () => {
    this.setState({ data: "", palindrome: "" });
  };

  palindrome = (data) => {
    if (data.length === 1 || data.length === 0) {
      this.setState({ palindrome: "This is a palindrome" });
    } else if (data[0] === data[data.length - 1]) {
      this.palindrome(data.slice(1, data.length - 1));
    } else {
      this.setState({ palindrome: "This is not a palindrome" });
    }
  };

  render() {
    return (
      <div className="container">
        <h1> Palindrome Checking App</h1>
        <div className="app">
          <div className="inputfield">
            <label name=" palindrome ">
              Input text to check if it is a palindrome:
            </label>
            <input
              id="palindrome "
              type="text"
              onChange={this.inputHandeler}
              value={this.state.data}
            />
            <div className="button_wrapper">
              <button onClick={() => this.palindrome(this.state.data)}>
                Check
              </button>
              <button onClick={this.resethandeler}> Reset </button>
            </div>
          </div>
          <div className="output">{this.state.palindrome}</div>
        </div>
      </div>
    );
  }
}
