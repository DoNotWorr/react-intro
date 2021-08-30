import { Component } from "react";

class Authorized extends Component {
  state = {};
  render() {
    const header = "Welcome";
    return (
      <>
        <h1>{header}</h1>
        <p>You are now logged in.</p>
      </>
    );
  }
}

export default Authorized;
