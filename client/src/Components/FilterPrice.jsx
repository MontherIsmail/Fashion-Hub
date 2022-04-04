function FilterPrice({ Range, minPrice, maxPrice }) {
  return (
    <>
      <h2>Filters</h2>
      <form>
        <label>
          min price
          <input
            type="range"
            value={minPrice}
            min="0"
            max="30"
            name="minPrice"
            onChange={Range}
          />
        </label>
        <label>
          max price
          <input
            type="range"
            value={maxPrice}
            name="maxPrice"
            min="0"
            max="30"
            onChange={Range}
          />
        </label>
      </form>
    </>
  );
}

export default FilterPrice;
