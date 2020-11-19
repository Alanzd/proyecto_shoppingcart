import React, { Component } from "react";

//contains the headers for the products list
export default class ShoppingHeader extends Component{  
    render(){
        return <div>
          <h1 className="main">Shopping cart</h1>
          <ul className="products-list">
            <li className="row">
              <div className="col-product">Product details</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-price">Price</div>
              <div className="col-total">Total</div>
            </li>
          </ul>
          </div>
    }
}
