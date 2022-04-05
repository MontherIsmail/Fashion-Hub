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
  search,
  isLogged,
}) => {
  return (
    <div className="products">
      <div className="cards">
        {products.length &&
          products
            .filter(
              (el) =>
                el.name.toLowerCase().includes(search.toLowerCase()) &&
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
                search={search}
                isLogged={isLogged}
              />
            ))}
      </div>
    </div>
  );
};

export default AllProducts;
