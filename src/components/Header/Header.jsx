import React from 'react'
import CTA from '../CTA/CTA'
import Me from '../../assets/me.png'
import HeaderSocial from '../HeaderSocial/HeaderSocial'
import "./header.css"
import { useTypewriter } from 'react-simple-typewriter'
// import "react-simple-typewriter/dist/index.css"


function Header() {
  const { text } = useTypewriter({
    words: ['Cristian Calderón'],

    loop: 1,
    cursor: true,
    cursorStyle: '_'
  })


  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm </h5>
        <div className='movement'>
          <h1>

            <span>
              {text}
              {/* <Typewriter
            words={['CRISTIAN', 'CALDERÓN', 'BRONCANO']}
            loop={5}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          /> */}
            </span>
          </h1>

        </div>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header >
  )
}

export default Header