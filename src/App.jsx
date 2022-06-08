import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'

function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>

    )
}

export default App