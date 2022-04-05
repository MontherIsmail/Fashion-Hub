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
    axios
      .get(`/api/v1/products/${id}`)
      .then((res) => this.setState({ product: res.data[0] }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <div className="one-card">
          <div className="one-card-img">
            <img src={this.state.product.product_image} alt="Product"></img>
          </div>
          <div className="one-card-info">
            <p>Name: <span>{this.state.product.name}</span></p>
            <p>Category: <span>{this.state.product.category}</span></p>
            <p>Previous Price: <span className="prev-price">{this.state.product.prev_price}</span></p>
            <p>New Price: <span>{this.state.product.new_price}</span></p>
          </div>
        </div>
      </>
    );
  }
}
export default ProductPage;
