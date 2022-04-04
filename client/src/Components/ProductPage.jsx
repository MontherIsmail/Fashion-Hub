import axios from "axios";
import { Component } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <GetOneProduct id={id} />;
}

class GetOneProduct extends Component {
  state = {
    product: [],
  };
  componentDidMount() {
    const { id } = this.props;
    console.log(id);
    axios
      .get(`/api/v1/products/${id}`)
      .then((res) => this.setState({ product: res.data[0] }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <p>{this.state.product.name}</p>
        <p>{this.state.product.category}</p>
        <p>{this.state.product.quantity}</p>
        <p>{this.state.product.prev_price}</p>
        <p>{this.state.product.new_price}</p>
      </>
    );
  }
}
// id, name, category, quantity, prev_price, new_price
export default ProductPage;
