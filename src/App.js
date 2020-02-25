import React, { Component } from 'react';
import './App.css'; //importo los estilos
import Products from './components/Products.js';   //importo el componente con la lista de producto
import ShoppingHeader from './components/ShoppingHeader';
import Order from './components/Order';
import products from './elements/products.json';

class App extends Component{

  constructor(props){
    super(props)
    let mapProducts = {}  
    //recorro el array y cada elemento pasa a ser un objeto 
    //cada objeto tendrá como clave el code, asi la clave [0] será [Product code X7R2OPX]
    for(let i = 0; i < products.length; i++){
      mapProducts[products[i].code] = products[i]; 
    }
    this.state = {
      products : mapProducts
    }
    console.log(mapProducts);
    
    this.handleProducts = this.handleProducts.bind(this)
  }

  handleProducts (productCode, newQuantity){
    let products = this.state.products
    products[productCode].quantity = newQuantity

    //TODO: probar sin setState
    this.setState({
      products:products
    })    
    
  }

  render(){
    return( 
      <main className="App">
        <section className="products">
          <ShoppingHeader/>
          {/* con Object.values lo que hago es tranformar de nuevo los objetos en un array */}
          <Products products = {Object.values(this.state.products)} handleProducts = {this.handleProducts}/>
        </section>
          <Order products = {Object.values(this.state.products)}/>
      </main> 
    )
  }
}

export default App;