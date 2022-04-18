import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <footer className="section footer">
        <div className="footer-icons">
          <i className="fab fa-facebook" />

          <i className="fab fa-twitter" />

          <i className="fab fa-squarespace" />
        </div>
        <p className="copyright">
          copyright ©: Leon's Photography. All rights reserved.
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
