import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Product-Components/Card';
import logoBanner from '../../assets/logoBanner.PNG';
import banner from '../../assets/banner.PNG';
import typesMan from '../../assets/typesMan.PNG';

function Home({
  products,
  deleteItem,
  addToCart,
  handleIsEditable,
  editable,
  handleEditItemSubmit,
}) {
  const four = [products[0], products[1], products[2], products[3]];

  return (
    <>
      <header className="home-header">
        <div className="header-info">
          <img src={logoBanner} alt="Logo" />
          <div className="discount">
            <p>
              Get Up To<span> 40%</span>
            </p>
            <p>FOR A SPECIAL SALES</p>
          </div>
          <Link to="/market">
            <button>SHOPPING NOW</button>
          </Link>
        </div>
        <div className="header-img">
          <img src={banner} alt="Man" />
        </div>
      </header>
      <div className="serveces">
        <div className="part-1">
          <h3>30 Days Replacement</h3>
        </div>
        <div className="part-2">
          <h3>Gift Card</h3>
        </div>
        <div className="part-3">
          <h3>Secure Payments</h3>
        </div>
        <div className="part-4">
          <h3>Free Shipping</h3>
        </div>
      </div>
      <div className="types-of-products">
        <div className="women">
          <img src={typesMan} className="type-img" alt="woman type" />
        </div>
        <div className="men">
          <img src={typesMan} className="type-img" alt="man type" />
        </div>
        <div className="kids">
          <img src={typesMan} className="type-img" alt="Kids type" />
        </div>
      </div>
      <div className="smart-clothing">
        <h2>
          <span>S</span>mart <span> C</span>lothing
        </h2>
        <div className="links-smart">
          <ul>
            <Link to="#">
              <li className="first-li">WOMEN'S FANION</li>
            </Link>
            <Link to="#">
              <li>MEN'S FANION</li>
            </Link>
            <Link to="#">
              <li>GIRL'S FANION</li>
            </Link>
            <Link to="#">
              <li>BOY'S FANION</li>
            </Link>
          </ul>
          <hr />
        </div>
        <div className="some-cards">
          <div className="cards">
            {four.map((product) => {
              return product ? (
                <Card
                  key={product.id}
                  product={product}
                  deleteItem={deleteItem}
                  addToCart={addToCart}
                  handleIsEditable={handleIsEditable}
                  editable={editable}
                  handleEditItemSubmit={handleEditItemSubmit}
                />
              ) : (
                <></>
              );
            })}
          </div>
          <Link to="/market" className="view">
            VIEW MORE
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
