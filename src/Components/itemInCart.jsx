import React, { Component } from 'react';
export default class ItemInCart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bg-success" style={{ width:"30%", height:"30%"}}>
                <button>+</button>
                <img className="img-fluid rounded-3 " src={this.props.item.url}></img>
                <h3>{this.props.item.detail}</h3>
                <h3>{this.props.item.price}</h3>
            </div>
        )
    }
}