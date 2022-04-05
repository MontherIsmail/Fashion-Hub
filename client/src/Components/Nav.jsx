import { Link } from 'react-router-dom';

function Nav({cartCounter, handleOnSearchInputChange}) {
  return (
    <>
      <nav>
        <div className="nav-header">
          <h1>FH</h1>
          <div className="search">
            <input type="search" placeholder="Search" onChange={handleOnSearchInputChange}/>
            <Link className="login" to="/login">
              Login
            </Link>
            <Link className="cart" to="/cart">
              Cart {cartCounter}
            </Link>
          </div>
        </div>
        <div className="links">
          <ul>
            <Link to="/">
              <li className="first-ul">Home</li>
            </Link>
            <Link to="/market">
              <li>Market</li>
            </Link>
            <Link to="#">
              <li>Men's Clothing</li>
            </Link>
            <Link to="#">
              <li>Women's Clothing</li>
            </Link>
            <Link to="#">
              <li>Kid's Clothing</li>
            </Link>
            <Link to="#">
              <li>Blogs</li>
            </Link>
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
