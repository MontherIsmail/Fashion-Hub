import React from "react";
import footerLogo from "../../assets/footerLogo.PNG";
import payment from "../../assets/payment.PNG";

function Footer() {
  return (
    <footer>
      <img src={payment} alt="payment" />
      <div className="logo-copyright">
        <img src={footerLogo} alt="footer logo" />
        <p>
          © 2022 Fashion Hub. All rights reserved | Design by Monther Alzamli.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
