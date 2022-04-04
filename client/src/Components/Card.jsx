import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditProductForm from './EditProductForm';
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
      <div className="some-cards">
        <div className="cards">
          <Link to={`/product/${product.id}`}>
            <span id={product.name}>{product.name}</span>
          </Link>
          <span id={product.category}>{product.category}</span>
          <span id={product.quantity}>{product.quantity}</span>
          <span id={product.prev_price}>{product.prev_price}</span>
          <span id={product.new_price}>{product.new_price}</span>
          <img src={product.product_image} alt="Product"></img>
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
      </div>
    );
  }
}

export default Card;
