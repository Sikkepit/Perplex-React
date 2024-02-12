import React from 'react'

function Footer() {
  return (
    <footer id="footer">
            <nav id="footer--nav">
            <img src="assets/logo_bottom.png" alt="Haruno logo" id="footer--logo"/>
                <ul>
                    <li>Works</li>
                    <li>About</li>
                    <li>Media</li>
                </ul>
            </nav>
            <div id="footer--social-buttons">
                <i className="fa-brands fa-behance"></i>
                <i className="fa-brands fa-dribbble"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </footer>
  )
}

export default Footer