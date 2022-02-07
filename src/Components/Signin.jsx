import React, { Component } from "react";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      ms: "",
    };
    this.ChangePw = this.ChangePw.bind(this);
    this.ChangeUn = this.ChangeUn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  ChangeUn(event) {
    this.setState({ username: event.target.value });
  }
  ChangePw(event) {
    this.setState({ password: event.target.value });
  }
  onSubmit(e) {
e.preventDefault();
    axios
      .post("http://localhost:5000/users/", {
        username: this.state.username,
      })
      .then((res) =>
        this.setState({
          ms:
            res.data[0].password === this.state.password
              ? "login  success"
              : "login failure",
          password: "",
          username: "",
        })
      )
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="signin-form-container">
       
          <form onSubmit={this.onSubmit}>
        <div className="m-2">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            value={this.state.username}
            id="username"
            onChange={this.ChangeUn}
          />
        </div>
        <div class="m-2">
          <label for="password" className="form-label">
          Password
          </label>
          <input
            className="form-control"
            value={this.state.password}
            onChange={this.ChangePw}
            type="password"
            id="password"
          />
        </div>
        
        <button
        type="submit"
          className="SigninButton"
      
        >
          Login
        </button>

        <p>{this.state.ms}</p>
      </form>
     
      
        
      </div>
    );
  }
}
