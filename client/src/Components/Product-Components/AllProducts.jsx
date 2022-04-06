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
  search,
  isLogged,
  notFoundMessage,
  editableProduct,
  handleOnEditProductChange,
  category,
  prev_price,
  new_price,
  quantity,
  product_image,
  name,
}) => {
  return (
    <div className="products">
      <div className="cards">
        {!notFoundMessage.status || products.length !== 0 ? (
          products.length &&
          products
            .filter((el) => {
              return (
                el.name.toLowerCase().includes(search.toLowerCase()) &&
                (category === 'All' || el.category === category) &&
                el.new_price >= minPrice &&
                el.new_price <= maxPrice
              );
            })
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
                  handleOnEditProductChange={handleOnEditProductChange}
                  category={category}
                  name={name}
                  prev_price={prev_price}
                  new_price={new_price}
                  quantity={quantity}
                  product_image={product_image}
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
