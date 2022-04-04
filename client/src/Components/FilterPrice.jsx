import Input from "./Input";

function FilterPrice({ Range, minPrice, maxPrice }) {
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
          max="100000"
          id="minPrice"
          handleChange={Range}
        />
        <div class="range-price">
          <p>0 $</p>
          <p>10,000 $</p>
        </div>
        <Input
          label="Max Price"
          type="range"
          value={maxPrice}
          name="maxPrice"
          min="0"
          max="100000"
          id="maxPrice"
          handleChange={Range}
        />
        <div class="range-price">
          <p>0 $</p>
          <p>10,000 $</p>
        </div>
      </form>
    </div>
  );
}

export default FilterPrice;
