import React, { Component } from "react"; //importo React y los componentes de su bibioteca
import Product from "./Product";
import products from '../elements/products.json';  // importo el archivo  .json


// creo una clase formulario que hereda las caract de los componentes de react:
export default class Products extends Component {  

    //inicializo el constructor del padre (Component) y además le añado la propiedad products
    constructor(props){
        super(props)
        this.state = {
          products : products   //el valor de la propiedad products es lo que se importa del json
        }
      }
    render() {  
        
        // recorro el array con la funcion map  y a la propiedad product le asigno cada elemento 
        return this.state.products.map(product => <Product product ={product} key={product.id}/> )
        
    }
}


