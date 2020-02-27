import React, { Component } from "react";

export default class Order extends Component{

  //props contains product from App.js
  constructor(props){
    super(props)
    this.state = { 
      products: props.products
    } 
    this.getDiscounts = this.getDiscounts.bind(this);
  }
  // iterate the array comming in props (product) 
  // returns the total amount of items in the product list
  extractQt () {
    let quant = 0;
    for (var i = 0; i< this.state.products.length; i++){
      quant += this.state.products[i].quantity    
    }
    return quant;
  }
  //iterate the product´s array and multiply each price by each items quantity:
  extractTotal() {
    let total = 0;
    for (var i = 0; i< this.state.products.length; i++){
      total += this.state.products[i].price * this.state.products[i].quantity
    }
    return total;
  }
  //calculate the discounts for Mug and Shirt:
  getDiscounts () {
    let discounts = {
      "Mug": 0,
      "Shirt": 0,  
    }
    let products = this.state.products
    // iterate product´s array from props:
    for (var i = 0; i< products.length; i++){
      // if the products code is equal to mug´s code
      if(products[i].code === "X2G2OPZ"){
        // and the quantity is an even number:
        if(products[i].quantity%2 === 0){
          // multiply mug´s price by items quantity and apply the 50% discount
          discounts.Mug = 0-(products[i].price * products[i].quantity * 0.5)
        }else {
          // if quantity is an odd number
          // decrease total items by 1 and and apply the 50% discount 
          discounts.Mug = 0-(products[i].price * (products[i].quantity-1) * 0.5)
        }
      }
      // if the products code is equal to shirt´s code
      if (products[i].code === "X7R2OPX"){
        // and the items quantiy is greater than 2:
        if(products[i].quantity > 2){
          // apply the 5% discount (0.05) to the shirt´s price
          discounts.Shirt = 0-(products[i].price * products[i].quantity * 0.05)
        }
      }
    }
    return discounts;
  }
    
  render(){
    var discounts = this.getDiscounts()  
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
          <li><span>2x1 Mug offer</span><span>{discounts.Mug}€</span></li>
          <li><span>x3 Shirt offer</span><span>{discounts.Shirt}€</span></li>
          <li><span>Promo code</span><span>0€</span></li>
        </ul>
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            {/* calculate the final price subtracting the discounts from the total price */}
            <span className="summary-total-price">{this.extractTotal() + discounts.Mug + discounts.Shirt}€</span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>
    </aside>
  }
}