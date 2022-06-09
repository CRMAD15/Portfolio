import ReAct from 'react'
import "./about.css"
import Me from "../../assets/me-about.jpg"
import { BsAwardFill } from 'react-icons/bs'
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
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_cards">
                        <BsAwardFill className='about_icon' />
                        <h5>Experience</h5>
                        <small> Junior</small>
                    </article>
                </div>

            </div>

        </section>
    )
}
export default About