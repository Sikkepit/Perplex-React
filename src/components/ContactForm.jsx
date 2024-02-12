import React from 'react'

function ContactForm() {
  return (
    <section id="contact-form">
            <h2>Let's connect</h2>
            <p>Do you have a project? Feel free to get in touch</p>
            <a href="mailto:sakura@haruno.com">sakura@haruno.com</a><a href="mailto:sakura@haruno.com"><i className="fa-solid fa-arrow-up"></i></a>
            <form method="post">
                <div className="contact-form--group">
                    <input type="text" placeholder="Your name" id="contact-form--name-input"/>
                    <input type="email" placeholder="Your mail address" id="contact-form--email-input"/>
                </div>
                <div className="contact-form--group">
                    <textarea placeholder="Your message" id="contact-form--message"></textarea>
                    <input type="submit" value="Send" id="contact-form--submit-button"/>
                </div>
            </form>
        </section>
  )
}

export default ContactForm