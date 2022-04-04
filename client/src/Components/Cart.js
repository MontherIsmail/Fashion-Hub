import React from 'react'

function Cart() {
    const productsData = JSON.parse(window.localStorage.getItem("cart")) || [];
  return (
    <div>
      {productsData.map(product => 
      <div key={product.id}>
        <h2>{product.name}</h2>
        <h2>{product.category}</h2>
        <h2>{product.prev_price}</h2>
        <h2>{product.new_price}</h2>
        <h2>{product.quantity}</h2>
        </div>
        )};
    </div>
  )
}

export default Cart;