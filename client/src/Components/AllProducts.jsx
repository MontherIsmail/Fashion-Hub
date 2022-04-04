import Card from "./Card";

const AllProducts = ({
  products,
  deleteItem,
  addToCart,
  minPrice,
  maxPrice,
}) => {
  return (
    <div>
      <span>name</span>
      <span>category</span>
      <span>quantity</span>
      <span>prev_price</span>
      <span>new_price</span>
      {products.length &&
        products
          .filter((el) => el.new_price >= minPrice && el.new_price <= maxPrice)
          .map((product) => (
            <Card
              key={product.id}
              product={product}
              deleteItem={deleteItem}
              addToCart={addToCart}
            />
          ))}
    </div>
  );
};

export default AllProducts;
