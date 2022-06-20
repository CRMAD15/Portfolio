import React from 'react'
import "./about.css"
import Me from "../../assets/me-about.jpg"
import { BsAwardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { BsFillFolderFill } from 'react-icons/bs'

function About() {
    return (
        <section id='about'>
            <h5> Get to know</h5>
            <h2>About me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={Me} alt="about me" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <a href="#experience">
                            <article className="about_card">
                                <BsAwardFill className='about_icon' />
                                <h5>Experience</h5>
                                <small> Junior</small>
                            </article>
                        </a>
                        <a href="#contact">
                            <article className="about_card">
                                <FiUsers className='about_icon' />
                                <h5>Contact</h5>
                                <small> 676624418</small>
                            </article>
                        </a>
                        <a href="#portfolio">
                            <article className="about_card">
                                <BsFillFolderFill className='about_icon' />
                                <h5>Projects</h5>
                                <small> 3 completed </small>
                            </article>
                        </a>
                    </div>

                    <p>
                        I am a web developer with a background in the 3D world. I've always been attracted to technology and learning to program has always been that gap I wanted to fill, now that I've started I'm realizing that I like it more and more. Javascript is my main programming language but I'm looking forward to feel able to learn some more.                    </p>
                    <a href="#contact" className='btn btn-primary'>Let´s talk</a>
                </div>
            </div>

        </section>
    )
}
export default About