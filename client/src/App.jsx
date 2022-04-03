import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Nav from "./Components/Nav";
import axios from "axios";

class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get("/api/v1/products")
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));
  }

  deleteItem = (id) => {
    axios
      .delete(`/api/v1/products/${id}`)
      .then(() => {
        let products = this.state.products.filter((item) => item.id !== id);
        this.setState({ products });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { products } = this.state;
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
          <Route path="/login" element={<h1>login</h1>}></Route>
          <Route path="/cart" element={<h1>cart</h1>}></Route>
          <Route path="/product/:id" element={<h1>product</h1>}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
