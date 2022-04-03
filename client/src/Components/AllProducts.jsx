import Card from "./Card";

const AllProducts = ({ products, deleteItem }) => {
  return (
    <div>
      <span>name</span>
      <span>category</span>
      <span>quantity</span>
      <span>prev_price</span>
      <span>new_price</span>
      {products.map((product) => (
        <Card key={product.id} product={product} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default AllProducts;
