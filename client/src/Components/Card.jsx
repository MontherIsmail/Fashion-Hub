import React, { Component } from "react";

class Card extends Component {
  render() {
    const { product, deleteItem } = this.props;
    return (
      <div>
        <span>{product.name}</span>
        <span>{product.category}</span>
        <span>{product.quantity}</span>
        <span>{product.prev_price}</span>
        <span>{product.new_price}</span>
        <button className="delete" onClick={() => deleteItem(product.id)}>
          delete
        </button>
        <button>edit</button>
      </div>
    );
  }
}

export default Card;
