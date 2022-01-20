import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import SignIn from "./Signin";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: "false",
    };
  }
  render() {
    return (
      <div className="homePage">
        <div className="intro ">
          <h2 className="homeTittle">DELWYN Shop </h2>
          <p className="homeText">
            As many seasoned travelers know, the gastronomy you encounter abroad
            can be drastically different than anything you would typically eat
            at home. Trying new foods is one of the most fantastic parts of
            traveling, but it can be nice to dip a toe in the proverbial water
            before you dive right in
          </p>
          <Link to="/product">
            See Product
            <IoFastFoodOutline />
          </Link>
        </div>
        <div className="homeSignin">
          <SignIn />
        </div>
      </div>
    );
  }
}
