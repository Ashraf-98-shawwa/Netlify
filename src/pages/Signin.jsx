import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Signin extends Component {
  Authentication = {
    name: "zaqout",
    email: "zaqout@zaqout.com",
    password: "zaqout",
  };

  state = {
    name: "",
    email: "",
    password: "",
    navigate: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.name === this.Authentication.name &&
      this.state.email === this.Authentication.email &&
      this.state.password === this.Authentication.password
    ) {
      console.log("Authenticated");
      this.setState({ navigate: true });
    } else {
      console.log(" Not Authenticated");
    }
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} action="">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Enter your name ..  "
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              onChange={this.handleChange}
              type="email"
              placeholder="Enter your email ..  "
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              placeholder="Enter your password ..  "
              value={this.state.password}
              id="password"
            />
          </div>
          <input type="submit" />

          {this.state.navigate ? (
            <Navigate to="/home"  />
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}
