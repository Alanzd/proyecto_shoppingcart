import React, { Component } from 'react';
import './App.css'; //importo los estilos
//import tobuy from './elements/tobuy.json' //importo el json con los items
import Products from './components/Products.js';   //importo el componente  con la lista de productos
import products from './elements/products.json';  // importo el archivo  .json
import Shoppingcart from './components/Shoppingcart';
class App extends Component{

  state = {
    products : products   //el valor de la propiedad products es lo que se importa del json
  }

  render(){
  return( 
    // llamo al componente products y el valor va a ser los datos que tengo en state:
    <div>
     <Shoppingcart/>
     <Products products = {this.state.products}/>
     </div>

  )
  }
}

export default App;