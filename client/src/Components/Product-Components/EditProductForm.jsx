import React, { Component } from 'react';
import Input from '../Main-Components/Input';

class EditProductForm extends Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    const { isLoading } = this.state;
    const { editableProduct } = this.props;
    if (isLoading) {
      this.setState({ ...editableProduct[0] });
    }
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  render() {
    const { handleEditItemSubmit, id, handleIsisEditable } = this.props;
    const { prev_price, new_price, quantity, product_image, name, category } =
      this.state;

    return (
      <form className="edit-form" onSubmit={(e) => handleEditItemSubmit(e, id)}>
        <span className="exit-edit" onClick={(e) => handleIsisEditable(e)}>
          X
        </span>
        <Input
          type={'text'}
          id={'Name'}
          name={'name'}
          label={'Name'}
          value={name}
          handleChange={this.handleChange}
        />
        <Input
          type={'number'}
          id={'previous'}
          name={'prev_price'}
          label={'Previous Price'}
          value={prev_price}
          max="1000"
          handleChange={this.handleChange}
        />
        <Input
          type={'number'}
          id={'new'}
          name={'new_price'}
          label={'New Price'}
          max="1000"
          value={new_price}
          handleChange={this.handleChange}
        />
        <Input
          type={'number'}
          id={'quantity'}
          name={'quantity'}
          label={'Quantity'}
          max="30"
          value={quantity}
          handleChange={this.handleChange}
        />
        <Input
          type={'url'}
          id={'image'}
          name={'product_image'}
          label={'Product Image'}
          value={product_image}
          handleChange={this.handleChange}
        />
        <label htmlFor="type">Type :</label>
        <select
          id="type"
          name={'category'}
          value={category}
          onChange={this.handleChange}
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>
        <button>Edit</button>
      </form>
    );
  }
}

export default EditProductForm;
