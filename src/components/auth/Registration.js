import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:5000/registrations",
        {
          user: {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Registration response:", response);
      })
      .catch((error) => {
        console.log("Registration error:", error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
