import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
    };
    this.SignUpAc= this.SignUpAc.bind(this);
    this.onUsernameChange=this.onUsernameChange.bind(this);
    this.changePassword=this.changePassword.bind(this);
  }
  onUsernameChange(e){
    this.setState({username: e.target.value});
  }
  changePassword(e){
    this.setState({password: e.target.value});  
  }
  SignUpAc() {
    axios
      .post("http://localhost:5000/users/add",{username:this.state.username,password:this.state.password})
      .then((res) => {
        this.setState({ms:"Sign up successfully",username:"",password:"",})
      })
      .catch((err) => {
        this.setState({ms:"Fail",username:"",password:""})
      });
  }
  render() {
    return (
      <div>
        <div className="mb-3 ">
          <label for="Username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Username"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
        </div>
               <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" value={this.state.password} 
          className="form-control" id="password"
          onChange={this.changePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.SignUpAc}>
          Sign Up
        </button>
      </div>
    );
  }
}
