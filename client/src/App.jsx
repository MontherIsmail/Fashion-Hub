import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import Nav from "./Components/Nav";
import axios from "axios";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import "./App.css";
import ProductPage from "./Components/ProductPage";
import Cart from "./Components/Cart";
import FilterPrice from "./Components/FilterPrice";

class App extends Component {
  state = {
    products: [],
    popUpDisplay: false,
    isLogged: false,
    name: "",
    password: "",
    cart: [],
    maxPrice: 1000,
    minPrice: 0,
  };
  Range = (e) => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  handleLoginInputChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
  };
  handleSubmit = (e) => {
    const { name, password } = this.state;
    e.preventDefault();
    this.setState({
      isLogged: true,
    });
    const info = { name: name, password: password };
    const user = JSON.parse(localStorage.getItem("info")) || [];
    user.push(info);
    localStorage.setItem("info", JSON.stringify(user));
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("info")) || [];
    this.setState({ isLogged: user.length ? true : false });
    axios
      .get("/api/v1/products")
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));
  }
  removeFromCart = (id) => {
    const products = JSON.parse(localStorage.getItem("cart")) || [];
    const filteredArray = products.filter((product) => product.id !== id);
    localStorage.setItem("cart", filteredArray);
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

  addProduct = (e) => {
    e.preventDefault();
    console.log(444, e.target.prev_price.value);
    const { name, category, prev_price, new_price, quantity } = e.target;
    axios
      .post("/api/v1/products", {
        name: name.value,
        category: category.value,
        prev_price: prev_price.value,
        new_price: new_price.value,
        quantity: quantity.value,
      })
      .then((data) => {
        this.setState((prevState) => ({ ...prevState.products, data }));
      })
      .catch((err) => console.log(err));
  };

  addToCart = (id) => {
    const { products, cart } = this.state;
    const addedProduct = products.filter((product) => product.id === id);
    this.setState((prevState) => ({
      cart: [...prevState.cart, addedProduct[0]],
    }));
    console.log("cart", cart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  dataInCart = () => {
    const productsData = JSON.parse(window.localStorage.getItem("cart")) || [];
    return productsData;
  };

  handleOpenPopUp = () => this.setState({ popUpDisplay: true });
  handleClosePopUp = () => this.setState({ popUpDisplay: false });

  render() {
    const { products, isLogged, minPrice, maxPrice } = this.state;
    return (
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterPrice
                  Range={this.Range}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                />
                <AllProducts
                  products={products}
                  deleteItem={this.deleteItem}
                  addToCart={this.addToCart}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                />
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
              />
            }
          ></Route>
          <Route
            path="/products"
            element={
              <AddProduct
                trigger={this.state.popUpDisplay}
                handleClosePopUp={this.handleClosePopUp}
                addProduct={this.addProduct}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={<Cart dataInCart={this.dataInCart} />}
          ></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
