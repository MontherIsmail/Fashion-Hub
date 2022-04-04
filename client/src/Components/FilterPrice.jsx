import Input from './Input';

function FilterPrice({ Range, minPrice, maxPrice }) {
  return (
    <>
      <h2>Filters</h2>
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
      </form>
    </>
  );
}

export default FilterPrice;
