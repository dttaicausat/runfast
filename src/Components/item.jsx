import React, { Component } from "react";
import {connect} from 'react-redux';
import {BiPurchaseTag} from"react-icons/bi";
import add from "../redux/Action"
 class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count:0
    }
this.Add=this.Add.bind(this);
  }
  Add(){
    this.props.AddToCart(this.props.item );
    this.setState({count:this.state.count+1});
  }
  render() {
    return (
      <div className="card bg-light" style={{ width: "18rem",height:"18em" ,padding:"0.5rem" ,margin: "0.5rem" }}>
        <img style={{ height:"40%",borderRadius:"1em"}}
          src={this.props.item.url}
          className="card-img-top"
          alt={this.props.item.name}
        />
        <div class="card-body">
          <p class="card-text text-center">{this.props.item.name}</p>
          <h3 className="text-center">
            {this.props.item.cost.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </h3>
          <button onClick={this.Add} className="btn btn-primary btn-block text-center btn-buy mb-3" >Mua<BiPurchaseTag /></button>
          
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {NewListItem: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (message) => {
      dispatch(add(message))
    }
  }
};

const Item = connect(mapStateToProps, mapDispatchToProps)(Presentational);
export default Item;