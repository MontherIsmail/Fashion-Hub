import Card from '../Product-Components/Card';

const AllProducts = ({
  products,
  deleteItem,
  addToCart,
  minPrice,
  maxPrice,
  handleIsisEditable,
  isEditable,
  handleEditItemSubmit,
  category,
  search,
  isLogged,
  notFoundMessage,
  editableProduct,
}) => {
  return (
    <div className="products">
      <div className="cards">
        {!notFoundMessage.status || products.length !== 0 ? (
          products.length &&
          products
            .filter(
              (el) =>{
                return el.name.toLowerCase().includes(search.toLowerCase()) &&
                (category === 'All' || el.category === category) &&
                el.new_price >= minPrice &&
                el.new_price <= maxPrice}
            )
            .map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product}
                  deleteItem={deleteItem}
                  addToCart={addToCart}
                  handleIsisEditable={handleIsisEditable}
                  isEditable={isEditable}
                  handleEditItemSubmit={handleEditItemSubmit}
                  search={search}
                  isLogged={isLogged}
                  editableProduct={editableProduct}
                />
              );
            })
        ) : (
          <div className="no-data-found-message">{notFoundMessage.message}</div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
