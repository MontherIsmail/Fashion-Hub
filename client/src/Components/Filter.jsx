import Input from './Input';

function Filter({ Range, minPrice, maxPrice, handleFilterByCategory }) {
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
          max="100000"
          id="minPrice"
          handleChange={Range}
        />
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
        <label htmlFor="Type">Type :</label>
        <select id="type" name={'category'} onChange={handleFilterByCategory}>
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>
      </form>
    </>
  );
}

export default Filter;
