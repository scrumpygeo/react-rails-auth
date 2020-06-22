import React, { Component } from "react";
import Registration from "./auth/Registration";

class Home extends Component {
  handleSuccessfulAuth = (data) => {
    // Todo: update parent component
    // then redirect to dashboard
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}

export default Home;
