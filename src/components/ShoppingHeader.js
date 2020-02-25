import React, { Component } from "react";

//creo la clase Shoppingcart que incluye los encabezados de la lista de productos
export default class ShoppingHeader extends Component{  
    render(){
        return <div>
          <h1 className="main">Shopping cart</h1>
          <ul className="products-list tableHead">
            <li className="products-list-title row">
              <div className="col-product">Product details</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-price">Price</div>
              <div className="col-total">Total</div>
            </li>
          </ul>
          </div>
    }
}
