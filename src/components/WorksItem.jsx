import React from 'react'

function WorksItem({image, aspectRatio, title, body}) {
  return (
    <article>
        <img src={image} className={aspectRatio} alt={title}/>
        <h3>{title}</h3>
        <p>{body}</p>
    </article>
  )
}

export default WorksItem