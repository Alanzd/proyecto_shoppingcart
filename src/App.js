import React, { Component } from 'react';
import './App.css'; 
import Products from './components/Products.js';
import ShoppingHeader from './components/ShoppingHeader';
import Order from './components/Order';
import products from './elements/products.json'; 

export default class App extends Component{

  constructor(props){
    super(props)
    let mapProducts = {}  
    //iterate the array, convert the list into a products map
    //the key for each object is now the code, e.g, the key [0] will be [0001]
    // this is done to make the product list easily accesible
    for(let i = 0; i < products.length; i++){
      mapProducts[products[i].code] = products[i]; 
    }
    this.state = {
      products : mapProducts //products is the new array
    }
    this.handleProducts = this.handleProducts.bind(this)
  }
  // the parameters productCode and newQuantity will come from the component Product
  handleProducts (productCode, newQuantity){
    let products = this.state.products
    // the product quantity is the newQuantity (from Product Component):
    products[productCode].quantity = newQuantity
    // update the state with the new quantity
    this.setState({
      products:products
    })    
  }

  render(){
    //Object.values transforms the products map to the original array to use "for" loops in Order component
    let objectToList = Object.values(this.state.products);
    return( 
      <main className="App">
        <section className="products">
          <ShoppingHeader/>
          <Products products = {objectToList} handleProducts = {this.handleProducts}/>
        </section>
          <Order products = {objectToList}/>
      </main> 
    )
  }
}