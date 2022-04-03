import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Nav from "./Components/Nav";

class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then((res) => res.json())
      .then((products) => this.setState({ products }));
  }
  deleteItem = (id) => {
    fetch(`http://localhost:3001/api/v1/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        let products = this.state.products.filter((item) => item.id !== id);
        this.setState({ products });
      })
      .catch((error) => {
        console.log(error);
      });
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
