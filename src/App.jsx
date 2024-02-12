import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Specialisation from './components/Specialisation'
import Works from './components/Works'
import Newsletter from './components/Newsletter'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Header/>
        <Hero />
        <Partners />
        <Specialisation/>
        <Works/>
        <Newsletter/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default App
