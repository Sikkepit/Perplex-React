import React from 'react'

function SpecialisationItem({image, title}) {
  return (
    <article
      ><img src={image} className="specialisation--thumb" alt={title}/>
      <h3>{title}</h3>
    </article>
  )
}

export default SpecialisationItem