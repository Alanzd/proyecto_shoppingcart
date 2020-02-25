import React, { Component } from "react";

export default class Order extends Component{

//props contiene products de App.js
constructor(props){
  super(props)
  this.state = { 
    products: props.products
  } 
  console.log(this.state.products);
  
}

extractQt () {
  let quant = 0;
  for (var i = 0; i< this.state.products.length; i++){
    quant += this.state.products[i].quantity
    console.log(quant);
    
  }
  
  return quant;
}

extractTotal() {
  let total = 0;
  for (var i = 0; i< this.state.products.length; i++){
    total += this.state.products[i].price * this.state.products[i].quantity
  }
  return total;
}

totalCost () {
  return this.extractTotal()
}

  render(){
 
    return <aside className="summary">
      <h1 className="main">Order Summary</h1>
        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">{this.extractQt()}</span>
            <span className="summary-items-price">
              {this.extractTotal()}
              <span className="currency">€</span>
            </span>
          </li>
        </ul>
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>
          <li><span>2x1 Mug offer</span><span>0</span></li>
          <li><span>x3 Shirt offer</span><span>-3€</span></li>
          <li><span>Promo code</span><span>0€</span></li>
        </ul>
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span
            ><span className="summary-total-price">{this.totalCost()}</span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>
    </aside>
  }
}