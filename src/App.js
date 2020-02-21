import React, { Component } from 'react';
import './App.css'; //importo los estilos
//import tobuy from './elements/tobuy.json' //importo el json con los items
import Products from './components/Products.js';   //importo el componente con la lista de productos
import Shoppingcart from './components/Shoppingcart';
import Totalbuy from './components/Totalbuy';
class App extends Component{

  render(){
  return( 
   
    <main className="App">
      <section className="products">
     <Shoppingcart/>
     <Products />
     </section>
     <Totalbuy/>
     </main>
     

  )
  }
}

export default App;