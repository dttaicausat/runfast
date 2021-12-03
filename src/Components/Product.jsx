import React, { Component } from "react";
import ListItem from "../Products/product";
import Item from "./item";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: ListItem,
      type: "",
    };
    this.changeType = this.changeType.bind(this);
  }
  changeType(event) {
    this.setState({
      type: event.target.value,
    });
  }
  render() {
    const filteredList =
      this.state.type !== ""
        ? this.state.listProduct.filter((item) => item.type === this.state.type)
        : this.state.listProduct;

    return (
      <div className="card-container">
        <label for="type">type</label>

        <select className="form-select" id="type" onChange={this.changeType}>
          <option value="food">food</option>
          <option value="drink">drink</option>
          <option value="">full</option>
        </select>
        {filteredList.map((product) => (
          <Item item={product} />
        ))}
      </div>
    );
  }
}
