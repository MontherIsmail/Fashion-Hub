import React from 'react';
import Input from './Input';

function EditProductForm({ handleEditItemSubmit, id }) {
  return (
    <form className="form" onSubmit={(e) => handleEditItemSubmit(e, id)}>
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
      <button>Edit </button>
    </form>
  );
}

export default EditProductForm;
