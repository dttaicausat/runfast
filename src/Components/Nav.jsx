import React, { Component } from "react";
import {  Link } from "react-router-dom";
import { connect } from "react-redux";
import {GiMagnifyingGlass} from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { FcHome } from "react-icons/fc";
import {BsBellFill} from "react-icons/bs";
class NavPresent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: "true",
    };
  }

  render() {
    return (
      <div >
     <div className="navContainer">
        <ul className="nav">
          <li className="navHome">
            <Link to="/home">
              <FcHome />   delwyn shop
            </Link>
          </li>
          <li>
          <input type="search"></input>
          <button><GiMagnifyingGlass /></button>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link
              className={
                "nav-link  link-" +
                (this.props.isChange ? "danger bg-warning" : "light")
              }
              to="/cart"
            >
              <TiShoppingCart /> Your Cart
              {this.props.OnCart.reduce(function (sum, item) {
                return sum + item.quantity;
              }, 0)}
            </Link>
          </li>

          <li>
            <Link to="/infomation"><BsBellFill /></Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        </div>

   
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isChange: state.itemReducer.AddProduct,
    OnCart: state.itemReducer.OnProcessing,
  };
};
const Nav = connect(mapStateToProps)(NavPresent);
export default Nav;
