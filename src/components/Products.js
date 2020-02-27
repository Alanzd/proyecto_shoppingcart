import React, { Component } from "react"; 
import Product from "./Product";


export default class Products extends Component {  
  //props contains products and handleProducts from App.js
    constructor (props){
      super(props);
      this.state = {
        products: props.products,
      }   
      //Products.js doesn´t use the function handleProducts
      //this function will be sent from App.js to Product through Products props
      // (callback to update the App products)
      this.handleProducts = props.handleProducts     
    }        
    render() {
      //map the products´ array and for each element (product) it renders a "Product" component
      return this.state.products.map(product => <Product handleProducts={this.handleProducts} product ={product}/> )
       
    }
}
