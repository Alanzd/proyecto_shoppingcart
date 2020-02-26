import React, { Component } from "react";
import ReactModal from 'react-modal';

//creo la clase Product que contiene la lista de items que se venden con su informacion
export default class Product extends Component{
    //props contiene handleProducts y product de Products.js
    constructor(props){
        super(props)
        this.state = {
            image: props.product.image,
            quantity: props.product.quantity,
            price: props.product.price,
            code: props.product.code,
            description: props.product.description,
            fullDescription: props.product.fullDescription,
            showDetails: false,
        }

        this.handleProducts = props.handleProducts;

        this.openDetails = this.openDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
        
        this.onClickLess = this.onClickLess.bind(this);
        this.onClickMore = this.onClickMore.bind(this);
        
        this.bothFunctions = this.bothFunctions.bind(this);
    }

    onClickLess (e) {
        if (this.state.quantity > 0) {
            //convierto la cantidad de string a integer
            const numQuantity = parseInt(this.state.quantity);
            const decQuantity = numQuantity - 1 ;
            this.setState({
            quantity: decQuantity,
            })      
            const productCode = this.state.code;
            this.handleProducts(productCode, decQuantity)
        }
    }    
   
    onClickMore (e) {
        const numbQuantity = parseInt(this.state.quantity);
        const sumQuantity = numbQuantity + 1 ;
        this.setState({
            quantity: sumQuantity,
        })
        const productCode = this.state.code;
        this.handleProducts(productCode,sumQuantity)      
    }

    openDetails () {
        this.setState({
            showDetails: true,
        })
    }
    closeDetails () {
        this.setState({ 
            showDetails: false });
    }

    bothFunctions () {
        this.onClickMore();
        this.closeDetails();
    }
    
    render(){
        
        return <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    {/* la ruta de las imagenes es ../img/ + 'nombre de la imagen' que está en el json */}
                    <img src= {require('../img/'+ (this.state.image))} alt="Shirt" onClick={this.openDetails}/> 
                    <div className="product-description">
                        <h1>{this.state.description}</h1>
                        <p className="product-code">{this.state.code}</p>
                    </div>   
                    <ReactModal
                        className = "bonus_summary"
                        isOpen={this.state.showDetails}
                        ariaHideApp={false}
                    >   
                        <div>
                            <img className = "bonus-image" src= {require('../img/'+ (this.state.image))} alt="Shirt"/>
                        </div>
                        <div className = "bonus_product-code">
                            <button id = "clickclose" onClick={this.closeDetails}>X</button>
                            <h1> {this.state.description} {this.state.price}€</h1> <br/>
                            <p> {this.state.fullDescription} </p> <br/>
                            <p> {this.state.code} </p> <br/>
                            <button className = "bonus_summary_button" onClick={this.bothFunctions}>Add to cart</button>
                        </div>
                        
                        
                </ReactModal>            
                </figure>
            </div>
            <div className="col-quantity">
                <button className="count" onClick = {this.onClickLess}>-</button>
                {/* cambio value por defaultValue */}
                <input type="text" className="product-quantity" defaultValue = "0" value = {this.state.quantity}/>
                <button className="count" onClick = {this.onClickMore}>+</button>
            </div>
            <div className="col-price">
                <span className="product-price">{this.state.price}</span>
                <span className="product-currency currency">€</span>
            </div>
            <div className="col-total">
                <span className="product-price">{this.state.price * this.state.quantity}</span
                ><span className="product-currency currency">€</span>
            </div>
            
            </li>
        
    }


}
