import React, { Component } from "react";
import { add, minus, remove } from "../redux/Action";
import { connect } from "react-redux";
import { IoIosRemoveCircle } from "react-icons/io";
class Presentational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.Increate = this.Increate.bind(this);
    this.Decreate = this.Decreate.bind(this);
    this.Remove = this.Remove.bind(this);
  }
  Increate() {
    this.props.AddItem(this.props.item);
    this.setState({ count: this.state.count + 1 });
  }
  Decreate() {
    this.props.MinusItem(this.props.item);
    this.setState({ count: this.state.count - 1 });
  }
  Remove() {
    this.props.RemoveItem(this.props.item);
  }
  render() {
    return (
      <div className="itemInCart cart__Head">
        <h4 className="headChild">{this.props.item.name}</h4>{" "}
        <img
          className="imgInCart headChild"
          src={this.props.item.url}
          alt={this.props.item.name}
        ></img>
        <div className="quantity headChild">
          {" "}
          <button className="btnInCart" onClick={this.Increate}>
            +
          </button>
          <p>{this.props.item.quantity}</p>
          <button className="btnInCart " onClick={this.Decreate}>
            -
          </button>
        </div>{" "}
        <h3 className="headChild">{this.props.item.cost*this.props.item.quantity} $</h3>
        <div className="remove headChild">
          {" "}
          <button onClick={this.Remove}>
            {" "}
            <IoIosRemoveCircle />
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { inCart: state.onProcessing };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddItem: (item) => {
      dispatch(add(item));
    },
    MinusItem: (item) => {
      dispatch(minus(item));
    },
    RemoveItem: (item) => {
      dispatch(remove(item));
    },
  };
};

const ItemInCart = connect(mapStateToProps, mapDispatchToProps)(Presentational);
export default ItemInCart;
