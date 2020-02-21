import React, { Component } from "react"; //importo React y los componentes de su bibioteca
import Product from "./Product";


// creo una clase formulario que hereda las caract de los componentes de react:
class Products extends Component {  
    render() {  
        // renderizo los componentes
        return this.props.products.map(product => <Product product ={product} key={product.id}/> )
        
    }
}
export default Products;

