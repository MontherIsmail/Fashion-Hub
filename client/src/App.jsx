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
    editable: [false, 0],
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
  handleIsEditable = ({ target: { id } }) => {
    const { editable, products } = this.state;
    const editableProduct = products.filter((product) => product.id === +id);
    this.setState({
      editable: editableProduct[0].id === +id ? [!editable[0], +id] : null,
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
            editable: false,
          };
        });
      })
      .catch((err) => console.log(err));
  };

  addProduct = (e) => {
    e.preventDefault();
    const { name, category, prev_price, new_price, quantity, product_image } =
      e.target;
    axios
      .post("/api/v1/products", {
        name: name.value,
        category: category.value,
        prev_price: prev_price.value,
        new_price: new_price.value,
        quantity: quantity.value,
        product_image: product_image.value,
      })
      .catch((err) => console.log(err));
  };

  addToCart = (id) => {
    const { products, cart } = this.state;
    const addedProduct = products.filter((product) => product.id === id);
    window.localStorage.setItem("cart", JSON.stringify(cart));
    this.setState((prevState) => ({
      cart: [...prevState.cart, addedProduct[0]],
    }));
  };
  handleOpenPopUp = () => this.setState({ popUpDisplay: true });
  handleClosePopUp = () => this.setState({ popUpDisplay: false });

  render() {
    const { products, isLogged, editable, cart, minPrice, maxPrice } =
      this.state;
    return (
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <aside>
                  <FilterPrice
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
                  handleIsEditable={this.handleIsEditable}
                  handleEditItemSubmit={this.handleEditItemSubmit}
                  editable={editable}
                />
              </div>
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
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
