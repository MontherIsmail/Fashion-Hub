import React from 'react';
import { Link } from 'react-router-dom';

function Cart({removeFromCart}) {
  const productsData = JSON.parse(window.localStorage.getItem('cart')) || [];
  return (
    <div className="cart-container">
      {productsData.map((product, productIndex) => {
        return (
          <div id={product.id} className="product-in-cart" key={productIndex}>
            <img src={product.product_image} alt="Product"></img>
            <Link className="cart-product-name" to={`/product/${product.id}`}>
              {product.name}
            </Link>
            <p>
              Category:
              <span className="cart-product-category">{product.category}</span>
            </p>
            <p>
              Price:
              <span className="cart-product-new_price">
                {product.new_price}
              </span>
            </p>
            <button className='remove-from-cart-button' onClick={(e) => removeFromCart(productIndex)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
