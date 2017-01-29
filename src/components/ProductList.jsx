import React, { Component } from 'react';
import ProductCard from './ProductCard.jsx'

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        {this.props.products.map((product, i) => <ProductCard product={product} key={'product-'+i}/>)}        
      </div>
    );
  }
}

export default ProductList;
