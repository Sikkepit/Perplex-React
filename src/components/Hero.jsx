import React from 'react'

function Hero() {
  return (
    <section id="hero">
            <div id="hero--overlay">
                <h1 id="hero--title">Sakura haruno</h1>
                <h2 id="hero--subtitle">Designer &
                    Illustrator</h2>
                <p>Norway based designer who specialised
                    in Product design and illustration</p>
            </div>
            <div id="hero--photo-container">
                <img src="assets/sakura.webp" alt="Photo of Sakura" id="hero--photo"/>
            </div>
    </section>
  )
}

export default Hero