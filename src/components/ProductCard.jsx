import React, { Component } from 'react'
import ProductImage from './ProductImage'
import AddToCart from './AddToCart'

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        <h2>{this.props.product.displayName}</h2>
        <ProductImage imageUrls={this.props.product.imageUrls} />
        <p>{this.props.product.description}</p>
        <p>{this.props.product.price}</p>
        <AddToCart productId={this.props.product.id} />
      </div>
    );
  }
}

export default ProductCard;
