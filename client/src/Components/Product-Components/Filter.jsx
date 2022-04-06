import Input from "../Main-Components/Input";
import "../../App.css";

function Filter({ Range, minPrice, maxPrice, handleFilterByCategory }) {
  return (
    <div className="price">
      <h5>Price</h5>
      <form>
        <Input
          label="Min Price"
          type="range"
          value={minPrice}
          name="minPrice"
          min="0"
          max="1000"
          id="minPrice"
          handleChange={Range}
        />
        <div className="range-price">
          <p>0$</p>
          <p>1000$</p>
        </div>
        <Input
          label="Max Price"
          type="range"
          value={maxPrice}
          name="maxPrice"
          min="0"
          max="1000"
          id="maxPrice"
          handleChange={Range}
        />
        <div className="range-price">
          <p>0$</p>
          <p>1000$</p>
        </div>
        <label htmlFor="Type">Type :</label>
        <select id="type" name={"category"} onChange={handleFilterByCategory}>
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
