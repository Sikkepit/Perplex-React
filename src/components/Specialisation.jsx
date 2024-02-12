import React from 'react'
import SpecialisationItem from './SpecialisationItem'

function Specialisation() {
  return (
    <section id="specialisation">
        <header>
            <hr className="divider--hr"/><h3 className="divider--label">What I do best</h3>
            <h2>Specialisation</h2>
        </header>
        <div id="specialisation--content">
          <SpecialisationItem image="assets/special_1.png" title="Product design" key={1}/>
          <SpecialisationItem image="assets/special_2.png" title="Branding" key={2}/>
          <SpecialisationItem image="assets/special_3.png" title="Illustration" key={3}/>
        </div>
    </section>
  )
}

export default Specialisation