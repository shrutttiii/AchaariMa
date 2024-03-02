import React from "react";
import "./Navbar.css";
import AachariMa from "../Assets/AachariMa.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={AachariMa} alt="" height="101vw"  />
      </div>

      <div className="nav-menu">
        <ul>
          <li>Shop</li>
          <li>BestSellers</li>
          <li>Offers</li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <button>login</button>
      </div>
    </div>
  );
};
