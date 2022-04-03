import { Component } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";

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
      <div className="div">
        <AllProducts products={products} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
export default App;
