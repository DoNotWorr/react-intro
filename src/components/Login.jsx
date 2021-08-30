import React, { Component } from "react";

class Login extends Component {
  render() {
    const header = "Enter your password";
    return (
      <>
        <h1>{header}</h1>
        <form className="login" onSubmit={this.props.auth} action="#">
          <label htmlFor="password">Password</label>
          <input type="password" />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default Login;
