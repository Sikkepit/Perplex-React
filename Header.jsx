import React, { useState } from 'react'

function Header() {
  const [hamburger, setHamburger] = useState(false)

  // Open and close the hamburger menu
  function toggleMenu() {
    setHamburger(!hamburger);
  }
  // Restyle navlinks if the window is resized with the hamburger menu open
  function checkForResize() {
    if(window.innerWidth>700) {
        setHamburger(false);
    }
  }

  window.onresize = checkForResize;

  return (
    <header id="header">
        <img src="assets/logo.png" alt="Haruno logo" id="header--logo"/><button className="fa-solid fa-bars" onClick={toggleMenu}></button>
        <nav id="header--nav">
            <ul id="header--nav-links" className={hamburger ? "nav-links_hamburger" : ""}>
                <li>Works</li>
                <li>About</li>
                <li>Media</li>
                <li>Contact</li>
            </ul>
            
        </nav>
    </header>
  )
}

export default Header