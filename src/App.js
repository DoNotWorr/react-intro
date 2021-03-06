import React, { Component } from "react";
import Authorized from "./components/Authorized";
import Login from "./components/Login";

export default class App extends Component {
  state = { password: "swordfish", authorized: false };

  authorize = (e) => {
    const password = e.target.querySelector('input[type="password"]').value;
    this.setState({
      authorized: password === this.state.password,
    });
  };

  render() {
    return (
      <>
        {this.state.authorized ? (
          <Authorized />
        ) : (
          <Login auth={this.authorize} />
        )}
      </>
    );
  }
}
