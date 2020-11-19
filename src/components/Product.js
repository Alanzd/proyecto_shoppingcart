import React, { Component } from "react";
import ReactModal from 'react-modal';  //import the component from react to render modals 
// create Product class, containing the item´s list and their information(image,price,code,...): 

export default class Product extends Component{
    //props contains handleProducts and product from Products.js:
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
   
        // the function handleProducts is received from Products component
        // the parameters will be updated here and sent again to App.js
        this.handleProducts = props.handleProducts;

        // the following functions are the ones defined in this class (Product):
        this.openDetails = this.openDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
        
        this.onClickLess = this.onClickLess.bind(this);
        this.onClickMore = this.onClickMore.bind(this);
        
        this.bothFunctions = this.bothFunctions.bind(this);
    }
    //the function onClickLess decrements the value of quantity by 1:
    onClickLess (e) {
        // the quantity is updated only if it's greater than 0:
        if (this.state.quantity > 0) {
            //convert the quantity from string to integer:
            const numQuantity = parseInt(this.state.quantity);
            // decrement it by 1
            const decQuantity = numQuantity - 1 ;
            //update the state, quantity will be the new decremented quantity:
            this.setState({
            quantity: decQuantity,
            });    
            //handleProducts in App.js is updated with the parameters productCode and quantity obtained here:
            const productCode = this.state.code;
            this.handleProducts(productCode, decQuantity)
        }
    }    
    //the function onClickMore increments the value of quantity by 1:
    onClickMore (e) {
         //convert the quantity from string to integer:
        const numbQuantity = parseInt(this.state.quantity);
        // increment it by 1
        const sumQuantity = numbQuantity + 1 ;
        //update the state, quantity will be the new incremented quantity:
        this.setState({
            quantity: sumQuantity,
        })
        //handleProducts in App.js is updated with the parameters productCode and quantity obtained here:
        const productCode = this.state.code;
        this.handleProducts(productCode,sumQuantity)      
    }
    // change showDetails to true (to render the modal that contains the product details):
    openDetails () {
        this.setState({
            showDetails: true
        });
    } 
    // change showDetails to false (to render the modal that contains the product details):
    closeDetails () {
        this.setState({ 
            showDetails: false 
        });
    }

    //when clicking "Add to cart", the function bothFunctions add the selected item to the shopping cart and close the modal
    bothFunctions () {
        this.onClickMore();
        this.closeDetails();
    }

    render(){
    return <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    {/* the images path is ../img/ + the 'img name' in the json file */}
                    <img src= {require('../img/'+ (this.state.image))} alt="IMG" onClick={this.openDetails}/> 
                    <div className="product-description">
                        <h1>{this.state.description}</h1>
                        <p className="product-code">Product code {this.state.code}</p>
                    </div>   
                    <ReactModal
                        className = "bonus_summary"
                        // isOpen takes the value "true" and the modal is opened:
                        isOpen={this.state.showDetails}
                        //to avoid the Warning "react-modal: App element is not defined" in console:
                        ariaHideApp={false}
                    >   
                        <div>
                        <img className = "bonus_image" src= {require('../img/'+ (this.state.image))} alt="Shirt"/>
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
                {/* readOnly = 0 to avoid Warning: Failed prop type: 
                You provided a `value` prop to a form field without an `onChange` handler*/}
                <input type="number" className="product-quantity" readOnly = "0" value = {this.state.quantity}/>
                <button className="count" onClick = {this.onClickMore}>+</button>
            </div>
            <div className="col-price">
                <span className="product-price">{this.state.price}</span>
                <span className="product-currency currency">€</span>
            </div>
            <div className="col-total">
                {/* calculate the total multiplying price by item´s quantity*/}
                <span className="product-price">{this.state.price * this.state.quantity}</span
                ><span className="product-currency currency">€</span>
            </div>
            </li>
    }
}
