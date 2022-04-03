import React, { Component } from "react";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    const { product, deleteItem } = this.props;
    return (
      <div className="some-cards">
        <div className="cards">
          <Link to={`/product/${product.id}`}>
            <span>{product.name}</span>
          </Link>
          <span>{product.category}</span>
          <span>{product.quantity}</span>
          <span>{product.prev_price}</span>
          <span>{product.new_price}</span>
          <button className="delete" onClick={() => deleteItem(product.id)}>
            delete
          </button>
          <button>edit</button>
        </div>
      </div>
    );
  }
}

export default Card;
