import React, { Component } from "react";
import { connect } from "react-redux";
import ItemInCart from "./itemInCart";
import { add } from "../redux/Action";
import EmptyCart from "./EmptyCart";

import Purchase from "./purchase";
class CartPresent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
 
  render() {
    return (
      <div className="cart">
      
          {" "}
          {this.props.inCartList.length === 0 && <EmptyCart />}
          {/* {this.props.inCartList.length !== 0 && <TableHead />} */}
                   {" "}
            {this.props.inCartList.map((item) => (
              <ItemInCart item={item} key={item.id} />
            ))}
        <Purchase />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { inCartList: state.itemReducer.OnProcessing };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (message) => {
      dispatch(add(message));
    },
  };
};

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartPresent);
export default Cart;
