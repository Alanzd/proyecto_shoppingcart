import React, { Component } from "react";

export default class Order extends Component{

//props contiene products de App.js
constructor(props){
  super(props)

  this.state = { 
    products:props.products
    
  } 
  console.log(props);
  
  this.totalItems = this.totalItems.bind(this)

}

totalItems(){
  for(let i = 0; i < this.state.products.length; i++) {
       return <p>Hola</p>
  }
  


// totalPrice(){

// }

  render(){
    
    return <aside className="summary">
      <h1 className="main">Order Summary</h1>
        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">{this.totalItems}</span>
            <span className="summary-items-price">
              
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
            ><span className="summary-total-price"></span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>
    </aside>
    }
}