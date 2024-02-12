import React from 'react'
import NewsletterItem from './NewsletterItem';

function Newsletter() {
    

    // Horizontal scroller
    function scrollContent(event) {
        const newsletterContent = document.getElementById('newsletter--content');
        if(window.innerWidth>1150) {
            event.preventDefault();
            newsletterContent.scrollLeft += event.deltaY*3;
        }
    }

  return (
    <section id="newsletter">
            <hr className="divider--hr"/><h3 className="divider--label">My weekly newsletter and blogs</h3>
            <header>
                
                <h2>Design newsletter</h2>
                <div><h3>Explore All blogs</h3><i className="fa-solid fa-arrow-right"></i></div>
            </header>
            <div id="newsletter--content" onWheel={(e) => scrollContent(e)}>
                <NewsletterItem key={1} image="assets/newsletter_1.webp" title="Calculate your expenses" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem." />
                <NewsletterItem key={2}  image="assets/newsletter_2.webp" title="Hammocks are comfy" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem." />
                <NewsletterItem key={3}  image="assets/newsletter_3.webp" title="User psychology" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem." />
                <NewsletterItem key={4}  image="assets/newsletter_1.webp" title="Calculate your expenses" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem." />
                <NewsletterItem key={5}  image="assets/newsletter_2.webp" title="Hammocks are comfy" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem." />
                <NewsletterItem key={6}  image="assets/newsletter_3.webp" title="User psychology" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem." />
            </div>
        </section>
  )
}

export default Newsletter