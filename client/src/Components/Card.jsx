import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditProductForm from "./EditProductForm";
import "./Product.css";
class Card extends Component {
  render() {
    const {
      product,
      deleteItem,
      handleIsEditable,
      editable,
      handleEditItemSubmit,
      addToCart,
    } = this.props;
    return (
      <div className="card">
        <img src={product.product_image} alt="Product" />
        <h5 id={product.name}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h5>
        {/* <span id={product.category}>{product.category}</span> */}
        {/* <span id={product.quantity}>{product.quantity}</span> */}
        <div className="prices">
          <p id={product.new_price}>{product.new_price} $</p>
          <p className="prev-price" id={product.prev_price}>
            {product.prev_price} $
          </p>
        </div>

        <button className="delete" onClick={() => deleteItem(product.id)}>
          delete
        </button>
        <button
          className="edit"
          id={product.id}
          onClick={(e) => handleIsEditable(e)}
        >
          edit
        </button>
        <button onClick={(e) => addToCart(product.id)}>Add To Cart</button>
        {editable[0] && editable[1] === product.id ? (
          <EditProductForm
            id={product.id}
            handleEditItemSubmit={handleEditItemSubmit}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Card;
