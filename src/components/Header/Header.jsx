import React from 'react'
import CTA from '../CTA/CTA'
import Me from '../../assets/me.png'
import HeaderSocial from '../HeaderSocial/HeaderSocial'
import "./header.css"

function Header() {
  return (
    <header>
      <div className="container header_container">

        <h5>Hello i'm </h5>
        <h1>Cristian Calderón</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />

        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>


    </header>
  )
}

export default Header