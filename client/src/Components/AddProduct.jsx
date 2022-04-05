import React from 'react';
import Input from './Input';
export default function AddProduct(props) {
  const { addProduct } = props;
  return (
    <div className="add-container">
      <div className="add-inner">
        <div className="add-header">
          <h3>Add New Product</h3>
        <hr />
        </div>
        <form className="form" onSubmit={addProduct}>
          <Input type={'text'} id={'Name'} name={'name'} label={'Name'} />
          <Input
            type={'number'}
            id={'previous'}
            name={'prev_price'}
            label={'Previous Price'}
          />
          <Input
            type={'number'}
            id={'new'}
            name={'new_price'}
            label={'New Price'}
          />
          <Input
            type={'number'}
            id={'quantity'}
            name={'quantity'}
            label={'Quantity'}
          />
          <Input
            type={'url'}
            id={'image'}
            name={'product_image'}
            label={'Product Image'}
          />
          <label htmlFor="type">Type :</label>
          <select id="type" name={'category'}>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
          </select>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
