import React, { Component } from "react";

//creo la clase Product que contiene la lista de items que se venden con su informacion
export default class Product extends Component{

    constructor(props){
        super(props)
        this.state = {
            image: props.product.image,
            quantity: props.product.quantity,
            price: props.product.price,
            code: props.product.code,
            description: props.product.description,
        } 
        this.onClickLess = this.onClickLess.bind(this);
        this.onClickMore = this.onClickMore.bind(this);
    }

    onClickLess () {
        if (this.state.quantity!==0) {
            let numQuantity = parseInt(this.state.quantity);
        let decQuantity = numQuantity - 1 ;
        this.setState({
            quantity: decQuantity,
        })      
        }
    }    

    onClickMore () {
        let numbQuantity = parseInt(this.state.quantity);
        let sumQuantity = numbQuantity + 1 ;
        this.setState({
            quantity: sumQuantity,
        })      
    }    

    render(){

        return <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    {/* la ruta de las imagenes es ../img/ + 'nombre de la imagen' que está en el json */}
                    <img src= {require('../img/'+ (this.state.image))} alt="Shirt"/> 
                    <div className="product-description">
                        <h1>{this.state.description}</h1>
                        <p className="product-code">{this.state.code}</p>
                    </div>
                </figure>
            </div>
            <div className="col-quantity">
                <button className="count" onClick = {this.onClickLess}>-</button>
                {/* cambio value por defaultValue */}
                <input type="text" className="product-quantity" defaultValue = "0" value= {this.state.quantity}/>
                <button className="count" onClick = {this.onClickMore}>+</button>
            </div>
            <div className="col-price">
                <span className="product-price">{this.state.price}</span>
                <span className="product-currency currency">€</span>
            </div>
            <div className="col-total">
                <span className="product-price">{this.state.price}</span
                ><span className="product-currency currency">€</span>
            </div>
                </li>
    }
}