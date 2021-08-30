import React, { Component } from "react";

export default class App extends Component {
  state = { password: "swordfish", authorized: false };

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    this.setState({
      authorized: password === this.state.password,
    });
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>
      </>
    );
  }
}
