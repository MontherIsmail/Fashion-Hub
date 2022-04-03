import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import Nav from "./Components/Nav";
import axios from "axios";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import "./App.css";

class App extends Component {
  state = {
    products: [],
    popUpDisplay: false,
    loged: false,
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
    console.log("target.id", target.id, "target.value", target.value);
  };
  handleSubmit = (e) => {
    const { name, password } = this.state;
    e.preventDefault();
    this.setState({
      loged: true,
    });
    console.log(e.target);
    console.log(this.state);
    const info = { name: name, password: password };
    const user = JSON.parse(localStorage.getItem("info")) || [];
    user.push(info);
    localStorage.setItem("info", JSON.stringify(user));
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("info")) || [];
    this.setState({ loged: user.length ? true : false });
    console.log(user);
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

  handleOpenPopUp = () => this.setState({ popUpDisplay: true });
  handleClosePopUp = () => this.setState({ popUpDisplay: false });

  render() {
    const { products, loged } = this.state;
    return (
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <AllProducts products={products} deleteItem={this.deleteItem} />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                loged={loged}
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
          <Route path="/cart" element={<h1>cart</h1>}></Route>
          <Route path="/product/:id" element={<h1>product</h1>}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
