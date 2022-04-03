import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">home</Link>
      <Link to="/login">login</Link>
      <Link to="/cart">cart</Link>
    </>
  );
}

export default Nav;
