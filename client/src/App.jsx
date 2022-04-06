import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './Components/Main-Components/Nav';
import Footer from './Components/Main-Components/Footer';
import Home from './Components/Main-Components/Home';
import AllProducts from './Components/Product-Components/AllProducts';
import AddProduct from './Components/Product-Components/AddProduct';
import ProductPage from './Components/Product-Components/ProductPage';
import Login from './Components/User-Components/Login';
import './App.css';
import Cart from './Components/User-Components/Cart';
import Filter from './Components/Product-Components/Filter';
import './App.css';
import bannerProducts from './assets/bannerProducts.png';

class App extends Component {
  state = {
    products: [],
    isLogged: false,
    isEditable: [false, 0],
    editableProduct: [],
    name: '',
    password: '',
    cart: JSON.parse(window.localStorage.getItem('cart')) || [],
    maxPrice: 1000,
    minPrice: 0,
    category: 'All',
    search: '',
    notFoundMessage: {},
    validationErrorMessage: {},
    successfullyMessage: {},
    editedProduct: {},
  };
  Range = (e) => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };
  handleFilterByCategory = ({ target: { value } }) => {
    this.setState({
      category: value,
    });
  };
  handleFilter = ({ target }) => {
    this.setState({
      category: target.id,
    });
  };
  handleAllProducts = () => {
    this.setState({ category: 'All' });
  };
  handleLoginInputChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
  };
  logoutUserHandle = () => {
    localStorage.removeItem('info');
    this.setState({
      isLogged: false,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = this.state;
    this.setState({
      isLogged: true,
    });
    const info = { name: name, password: password };
    const user = JSON.parse(localStorage.getItem('info')) || [];
    user.push(info);
    localStorage.setItem('info', JSON.stringify(user));
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('info')) || [];
    this.setState({ isLogged: user.length ? true : false });
    axios
      .get('/api/v1/products')
      .then((res) => {
        this.setState({
          products: !res.data[0] ? [] : res.data,
          notFoundMessage: res.data.status === 203 ? res.data : {},
          successfullyMessage: res.data.status === 200 ? res.data : {},
        });
      })
      .catch((err) => console.log(err));
  }

  addProduct = (e) => {
    e.preventDefault();
    const { name, category, prev_price, new_price, quantity, product_image } =
      e.target;
    axios
      .post('/api/v1/products', {
        name: name.value,
        category: category.value,
        prev_price: prev_price.value,
        new_price: new_price.value,
        quantity: quantity.value,
        product_image: product_image.value,
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            products: !res.data.addedProduct
              ? [...prevState.products]
              : [...prevState.products, res.data.addedProduct],
            validationErrorMessage: res.data.status === 400 ? res.data : {},
            successfullyMessage: res.data.status === 200 ? res.data : {},
          };
        });
      })
      .catch((err) => console.log(err));
  };
  deleteItem = (id) => {
    axios
      .delete(`/api/v1/products/${id}`)
      .then(() => {
        let products = this.state.products.filter((item) => item.id !== id);
        this.setState({ products });
      })
      .catch((err) => console.log(err));
  };
  handleIsisEditable = ({ target: { id } }) => {
    const { isEditable, products } = this.state;
    const editableProduct = products.filter((product) => product.id === +id);
    this.setState({
      isEditable: !editableProduct[0]
        ? false
        : editableProduct[0].id === +id
        ? [!isEditable[0], +id]
        : null,
      editableProduct: editableProduct,
    });
  };
  handleEditItemSubmit = (e, id) => {
    const { name, category, prev_price, new_price, quantity, product_image } =
      e.target;
    e.preventDefault();
    axios
      .patch(`/api/v1/products/${id}`, {
        name: name.value,
        category: category.value,
        prev_price: prev_price.value,
        new_price: new_price.value,
        quantity: quantity.value,
        product_image: product_image.value,
      })
      .then((data) => {
        this.setState((prevState) => {
          let filteredProducts = prevState.products.filter(
            (product) => product.id !== id
          );
          return {
            products: [data.data.editedProduct, ...filteredProducts],
            isEditable: false,
          };
        });
      })
      .catch((err) => console.log(err));
  };
  handleOnSearchInputChange = ({ target: { value } }) => {
    this.setState({
      search: value,
    });
  };
  addToCart = (id) => {
    const { products, cart } = this.state;
    const addedProduct = products.filter((product) => product.id === id);
    this.setState({
      cart: [...cart, addedProduct[0]],
    });
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };
  removeFromCart = (productIndex) => {
    const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    const filteredArray = productsInCart.filter(
      (product, index) => index !== productIndex
    );
    localStorage.setItem('cart', JSON.stringify(filteredArray));
    this.setState({
      cart: [...filteredArray],
    });
  };
  render() {
    const {
      products,
      isLogged,
      isEditable,
      cart,
      minPrice,
      maxPrice,
      category,
      search,
      validationErrorMessage,
      notFoundMessage,
      successfullyMessage,
      editableProduct,
    } = this.state;
    return (
      <>
        <Router>
          <Nav
            cartCounter={cart.length}
            handleOnSearchInputChange={this.handleOnSearchInputChange}
            handleFilterByCategory={this.handleFilter}
            handleAllProducts={this.handleAllProducts}
            isLogged={isLogged}
            logoutUserHandle={this.logoutUserHandle}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  deleteItem={this.deleteItem}
                  addToCart={this.addToCart}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  handleIsisEditable={this.handleIsisEditable}
                  handleEditItemSubmit={this.handleEditItemSubmit}
                  isEditable={isEditable}
                  category={category}
                  notFoundMessage={notFoundMessage}
                />
              }
            ></Route>
            <Route
              path="/market"
              element={
                <>
                  <header className="product-header">
                    <img src={bannerProducts} alt="panner" />
                  </header>
                  <div className="container">
                    <aside>
                      <Filter
                        handleFilterByCategory={this.handleFilterByCategory}
                        Range={this.Range}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                      />
                    </aside>
                    <AllProducts
                      products={products}
                      deleteItem={this.deleteItem}
                      addToCart={this.addToCart}
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      handleIsisEditable={this.handleIsisEditable}
                      handleEditItemSubmit={this.handleEditItemSubmit}
                      isEditable={isEditable}
                      category={category}
                      search={search}
                      isLogged={isLogged}
                      notFoundMessage={notFoundMessage}
                      editableProduct={editableProduct}
                    />
                  </div>
                </>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <Login
                  handleLoginInputChange={this.handleLoginInputChange}
                  handleSubmit={this.handleSubmit}
                  isLogged={isLogged}
                ></Login>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <AddProduct
                  addProduct={this.addProduct}
                  validationErrorMessage={validationErrorMessage}
                  successfullyMessage={successfullyMessage}
                />
              }
            ></Route>
            <Route
              path="/cart"
              element={<Cart removeFromCart={this.removeFromCart} />}
            ></Route>
            <Route
              path="/product/:id"
              element={<ProductPage addToCart={this.addToCart} />}
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
