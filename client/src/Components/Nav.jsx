import { Link } from "react-router-dom";

function Nav({ handleFilterByCategory }) {
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
            <Link to="/">
              <li className="first-ul">Home</li>
            </Link>
            <Link to="/market">
              <li>Market</li>
            </Link>
            <li id="Men" name={"category"} onClick={handleFilterByCategory}>
              Men
            </li>
            <li id="Women" name={"category"} onClick={handleFilterByCategory}>
              Women
            </li>
            <li id="Boys" name={"category"} onClick={handleFilterByCategory}>
              Boys
            </li>
            <li id="Girls" name={"category"} onClick={handleFilterByCategory}>
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
