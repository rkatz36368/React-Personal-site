import React from 'react'
import Header from './componets/header/Header'
import Nav from './componets/nav/Nav'
import About from './componets/about/About'
import Experience from './componets/experience/Experience'
import Contact from './componets/contact/Contact'
import Footer from './componets/footer/Footer'

const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
