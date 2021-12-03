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
    this.onchancepassword = this.onchancepassword.bind(this);
    this.onchanceusername = this.onchanceusername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onchanceusername(event) {
    this.setState({ username: event.target.value });
  }
  onchancepassword(event) {
    this.setState({ password: event.target.value });
  }
  onSubmit() {
    axios
      .get("http://localhost:5000/users/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) =>
     
          res.json(res.data)
      )
      .catch((err) => err.json("invalid account"));
  }
  render() {
    return (
      <div className="signin-form">
        <form
          className="bg-light m-4 p-4 border border-secondary border-3"
          style={{ width: "20%", height: "20%", borderRadius: "0.5em" }}
        >
          <div className="mb-3 ">
            <label for="username" >
              User Name
            </label>
            <input
              
              className="form-control"
              id="username"
              onchange={this.onchangeusername}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
    <div className="status">{this.state.username}</div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}
