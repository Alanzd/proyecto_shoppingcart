import React, { Component } from "react";


export default class Product extends Component{
render(){
    const {product} = this.props;  
    return <li className="product row">
        <div className="col-product">
            <figure className="product-image">
                <img src= {require('../img/'+ (product.image))} alt="Shirt"/> 
                <div className="product-description">
                    <h1>{product.description}</h1>
                    <p className="product-code">{product.code}</p>
                </div>
            </figure>
        </div>
        <div className="col-quantity">
            <button className="count">-</button
            ><input type="text" className="product-quantity" value="3" /><button
            className="count"
            >
            +
            </button>
        </div>
        <div className="col-price">
            <span className="product-price">{product.price}</span
            ><span className="product-currency currency">€</span>
        </div>
        <div className="col-total">
            <span className="product-price">{product.price}</span
            ><span className="product-currency currency">€</span>
        </div>
              </li>
    }
}