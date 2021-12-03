import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import {RiAccountCircleLine} from"react-icons/ri";
import {TiShoppingCart} from"react-icons/ti";
import {FcHome }  from"react-icons/fc";
export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul class="nav justify-content-start">
          <li class="nav-item">
            <Link className="nav-link active" to="/home">Home <FcHome /></Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link active" to="/product">Product</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link active" to="/cart"><TiShoppingCart /></Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link active" to="/user"><RiAccountCircleLine /></Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link active" to="/signup">Sign Up</Link>
          </li>
         
         
        </ul>

        <Outlet />
      </div>
    );
  }
}
