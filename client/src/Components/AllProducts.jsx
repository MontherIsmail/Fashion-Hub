import Card from './Card';

const AllProducts = ({
  products,
  deleteItem,
  addToCart,
  minPrice,
  maxPrice,
  handleIsEditable,
  editable,
  handleEditItemSubmit,
  category,
}) => {
  console.log(category);
  return (
    <div>
      <span>name</span>
      <span>category</span>
      <span>quantity</span>
      <span>prev_price</span>
      <span>new_price</span>
      {products.length &&
        products
          .filter(
            (el) =>
              (category === 'All' || el.category === category) &&
              el.new_price >= minPrice &&
              el.new_price <= maxPrice
          )
          .map((product) => (
            <Card
              key={product.id}
              product={product}
              deleteItem={deleteItem}
              addToCart={addToCart}
              handleIsEditable={handleIsEditable}
              editable={editable}
              handleEditItemSubmit={handleEditItemSubmit}
            />
          ))}
    </div>
  );
};

export default AllProducts;
