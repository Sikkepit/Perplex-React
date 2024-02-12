import React from 'react'

function NewsletterItem({image, title, body}) {
  return (
    <article>
        <img src={image} className="newsletter--thumb" alt={title}/>
        <h3>{title}</h3>
        <p>{body}</p>
    </article>
  )
}

export default NewsletterItem