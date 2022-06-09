import ReAct from 'react'
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
                        <article className="about_card">
                            <BsAwardFill className='about_icon' />
                            <h5>Experience</h5>
                            <small> Junior</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small> ...</small>
                        </article>

                        <article className="about_card">
                            <BsFillFolderFill className='about_icon' />
                            <h5>Projects</h5>
                            <small> 3 completed </small>
                        </article>

                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum, aliquam ex laudantium sed officia dignissimos voluptas iste ea eligendi consequuntur, libero necessitatibus ratione vitae provident molestias dicta neque itaque!

                    </p>
                    <a href="#contact" className='btn btn-primary'>Let´s talk</a>
                </div>
            </div>

        </section>
    )
}
export default About