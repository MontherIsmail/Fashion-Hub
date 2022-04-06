import React from 'react';
import Input from '../Main-Components/Input';

function EditProductForm({
  handleEditItemSubmit,
  id,
  handleIsisEditable,
  editableProduct,
}) {
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
        value={editableProduct[0].name}
        handleChange={({ target }) => {
          target.value = target;
        }}
      />
      <Input
        type={'number'}
        id={'previous'}
        name={'prev_price'}
        label={'Previous Price'}
        value={editableProduct[0].prev_price}
      />
      <Input
        type={'number'}
        id={'new'}
        name={'new_price'}
        label={'New Price'}
        value={editableProduct[0].new_price}
      />
      <Input
        type={'number'}
        id={'quantity'}
        name={'quantity'}
        label={'Quantity'}
        value={editableProduct[0].quantity}
      />
      <Input
        type={'url'}
        id={'image'}
        name={'product_image'}
        label={'Product Image'}
        value={editableProduct[0].product_image}
      />
      <label htmlFor="type">Type :</label>
      <select id="type" name={'category'} value={editableProduct[0].category}>
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
