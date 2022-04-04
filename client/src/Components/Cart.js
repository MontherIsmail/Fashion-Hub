import React from 'react';

function Cart() {
  const productsData = JSON.parse(window.localStorage.getItem('cart')) || [];
  console.log();
  return (
    <div>
      {productsData.map((product, index) => {
        return (
          <div id={product.id} key={index}>
            <h2>{product.name}</h2>
            <h2>{product.category}</h2>
            <h2>{product.prev_price}</h2>
            <h2>{product.new_price}</h2>
            <h2>{product.quantity}</h2>
            <img src={product.product_image} alt='Product'></img>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
