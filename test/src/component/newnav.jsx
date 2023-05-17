import React, { useState } from "react";
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="nav-bar">
      <div className="menu-icon">
        <div className="hideShow">
          <div onClick={handleShowNavbar}>
            <Hamburger />
          </div>
        </div>
        <div className="social_icon">
          {/* Social icons */}
        </div>
      </div>
      <div id="nav-element" className={showNavbar ? "show-nav" : ""}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Dirt Shed Show">Dirt Shed Show</a>
          </li>
          <li>
            <a href="/MTB Maintenance">MTB Maintenance</a>
          </li>
          <li>
            <a href="/Ask GMBN">Ask GMBN</a>
          </li>
          <li>
            <a href="/Features">Features</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
