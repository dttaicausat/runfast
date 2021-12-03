import React, { Component } from "react";
import {connect} from"react-redux";
import ItemInCart from "./itemInCart"
import add from "../redux/Action"
 class CartPresent extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
             <div>{this.props.ListItem.map((item)=>(
                    <ItemInCart item={item} key={item.id} />
             ))}

             </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {ListItem: state.ListItem.OnProcessing}
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      AddToCart: (message) => { 
        dispatch(add(message))
      }
    }
  };
  
  const Cart = connect(mapStateToProps, mapDispatchToProps)(CartPresent);
  export default Cart;