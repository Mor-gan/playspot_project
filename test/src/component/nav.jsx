import React, { useState } from "react";
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="nav-bar">
      <div className="menu-icon" >
        <div onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className="social_icon">
          <a href="#" className="fa fa-facebook" id="icon"></a>
          <a href="#" className="fa fa-twitter" id="icon"></a>
          <a href="#" className="fa fa-instagram" id="icon"></a>
          <a href="#" className="fa fa-google" id="icon"></a>
          <a href="#" className="fa fa-snapchat" id="icon"></a>
        </div>
      </div>
      <div id="nav-element" >
        {
          showNavbar ? <ul>
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
          </ul> : null
        }
      </div>
    </nav>
  )
}

export default Navbar