import { Link } from 'react-router-dom';

function Nav({
  handleAllProducts,
  cartCounter,
  handleOnSearchInputChange,
  handleFilterByCategory,
  isLogged,
  logoutUserHandle,
}) {
  return (
    <>
      <nav>
        <div className="nav-header">
          <h1>FH</h1>
          <div className="search">
            <input
              type="search"
              placeholder="Search"
              onChange={handleOnSearchInputChange}
            />

            {isLogged ? (
              <>
                <button onClick={logoutUserHandle} className="logout">
                  Logout
                </button>
                <Link className="cart" to="/products">
                  +
                </Link>
              </>
            ) : (
              <>
                <Link className="login" to="/login">
                  Login
                </Link>
                <Link className="cart" to="/cart">
                  Cart {cartCounter}
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="links">
          <ul>
            <Link to="/">
              <li className="first-ul">Home</li>
            </Link>
            <Link to="/market" onClick={handleAllProducts}>
              <li>Shop</li>
            </Link>
            <li id="Men" name={'category'} onClick={handleFilterByCategory}>
              Men
            </li>
            <li id="Women" name={'category'} onClick={handleFilterByCategory}>
              Women
            </li>
            <li id="Boys" name={'category'} onClick={handleFilterByCategory}>
              Boys
            </li>
            <li id="Girls" name={'category'} onClick={handleFilterByCategory}>
              Girls
            </li>
            <Link to="#">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
