import React, { Component } from "react"; //importo React y los componentes de su bibioteca
import Product from "./Product";


export default class Products extends Component {  
  //props contiene products, quantity y handleProducts de App.js
    constructor (props){
      super(props);
      this.state = {
        products: props.products,
      }
      console.log(props);
      
      this.handleProductsParent = props.handleProducts
     
    }
        
    
    render() {
      return this.state.products.map(product => <Product handleProducts={this.handleProductsParent} product ={product}/> )
      
       
    }
}
