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
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import "./Components/Product.css";
import Home from "./Components/Home";
import bannerProducts from "./assets/bannerProducts.png";

class App extends Component {
  state = {
    products: [],
    isLogged: false,
    name: "",
    password: "",
    cart: [],
    maxPrice: 900000,
    minPrice: 0,
    category: "All",
    editable: [false, 0],
  };
  Range = (e) => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };
  handleFilterByCategory = ({ target: { value } }) => {
    console.log(value);
    this.setState({
      category: value,
    });
  };
  handleFilter = ({ target }) => {
    console.log(target.id);
    this.setState({
      category: target.id,
    });
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
      .then((data) => {
        this.setState((prevState) => {
          return {
            products: [...prevState.products, data.data.addedProduct],
          };
        });
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

  render() {
    const { products, isLogged, editable, cart, minPrice, maxPrice, category } =
      this.state;
    return (
      <>
        <Router>
          <Nav handleFilterByCategory={this.handleFilter} />
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
                  handleIsEditable={this.handleIsEditable}
                  handleEditItemSubmit={this.handleEditItemSubmit}
                  editable={editable}
                  category={category}
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
                      handleIsEditable={this.handleIsEditable}
                      handleEditItemSubmit={this.handleEditItemSubmit}
                      editable={editable}
                      category={category}
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
              element={<AddProduct addProduct={this.addProduct} />}
            ></Route>
            <Route path="/cart" element={<Cart cart={cart} />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
