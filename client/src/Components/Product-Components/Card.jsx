import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditProductForm from '../Product-Components/EditProductForm';
import '../../App.css';
class Card extends Component {
  render() {
    const {
      product,
      deleteItem,
      handleIsisEditable,
      isEditable,
      handleEditItemSubmit,
      addToCart,
      isLogged,
      editableProduct
    } = this.props;
    return (
      <div className="card">
        <img src={product.product_image} alt="Product" />
        <h5 id={product.name}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h5>
        <div className="prices">
          <p id={product.new_price}>{product.new_price} $</p>
          <p className="prev-price" id={product.prev_price}>
            {product.prev_price} $
          </p>
        </div>
        {isLogged ? (
          <>
            <button className="delete" onClick={() => deleteItem(product.id)}>
              delete
            </button>
            <button
              className="edit"
              id={product.id}
              onClick={(e) => handleIsisEditable(e)}
            >
              edit
            </button>
          </>
        ) : (
          <button onClick={(e) => addToCart(product.id)}>Add To Cart</button>
        )}

        {isEditable[0] && isEditable[1] === product.id ? (
          <EditProductForm
            id={product.id}
            handleEditItemSubmit={handleEditItemSubmit}
            handleIsisEditable={handleIsisEditable}
            editableProduct={editableProduct}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Card;
