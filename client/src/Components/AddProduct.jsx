import React from 'react';
import Input from './Input';
export default function AddProduct(props) {
  const { closePopUp, addProduct } = props;
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h3>Add New Product</h3>
          <button onClick={closePopUp}>X</button>
        </div>
        <hr />
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
