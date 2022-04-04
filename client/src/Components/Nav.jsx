import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <Link to="/">home</Link>
      <Link to="/market">Market</Link>
      <Link to="/login">login</Link>
      <Link to="/cart">cart</Link>
      <Link to="/products">add Product</Link>
    </>
  );
}

export default Nav;
