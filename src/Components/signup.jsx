import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listuser: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        this.setState({ listuser: res.data });
        console.log(this.state.listuser);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <form
          className="bg-light m-4 p-4 border border-secondary border-3"
          style={{ width: "20%", height: "20%", borderRadius: "0.5em" }}
        >
             <div className="mb-3 ">
            <label for="Username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Username"
              ar
              ia-describedby="emailHelp"
            />
          
          </div>
          <div className="mb-3 ">
            <label for="name" className="form-label">
               Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              ar
              ia-describedby="emailHelp"
            />
          
          </div>
          <div className="mb-3 ">
            <label for="face" className="form-label">
               your images
            </label>
            <input
              type="file"
              className="form-control"
              id="face"
              ar
              ia-describedby="emailHelp"
            />
          
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div class="mb-3">
            <label for="passwordrf" class="form-label">
              Password comfirm
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordrf"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Save
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
