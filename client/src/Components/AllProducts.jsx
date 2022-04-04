import Card from "./Card";

const AllProducts = ({ products, deleteItem, addToCart }) => {
  return (
    <div>
      <span>name</span>
      <span>category</span>
      <span>quantity</span>
      <span>prev_price</span>
      <span>new_price</span>
      {products.map((product) => (
        <Card key={product.id} product={product} deleteItem={deleteItem} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default AllProducts;
