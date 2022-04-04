import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-header">
          <h1>FH</h1>
          <div className="search">
            <input type="search" placeholder="Search" />
            <button className="search-btn">Search</button>
            <div className="login">
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
              <Link to="/cart">
                <button className="login-btn">Cart</button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="links">
          <ul>
            <Link to="/"><li className="first-ul">Home</li></Link>
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
