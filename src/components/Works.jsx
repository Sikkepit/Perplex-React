import React from 'react'
import WorksItem from './WorksItem'

function Works() {
  return (
    <section id="works">
            <hr className="divider--hr"/><h3 className="divider--label">Projects that my clients love</h3>
            <header>
                <h2>Works</h2>
                <div><h3>Explore All Projects</h3><i className="fa-solid fa-arrow-right"></i></div>
            </header>
            <div id="works--content">
                <WorksItem  key={1} title="Google Art & Culture" image="assets/works1.webp" aspectRatio="works--thumb portrait" 
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem."/>
                <WorksItem  key={2} title="E-bank" image="assets/works2.webp" aspectRatio="works--thumb square" 
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem."/>
                <WorksItem  key={3} title="Abstract Illustration" image="assets/works3.webp" aspectRatio="works--thumb square" 
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem."/>
                <WorksItem  key={4} title="Tutor application" image="assets/works4.webp" aspectRatio="works--thumb portrait" 
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem."/>
            </div>
        </section>
  )
}

export default Works