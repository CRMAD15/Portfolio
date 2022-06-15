import "./footer.css"
import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>

            {/* <a href="/#" className="footer_logo"> EGATOR</a> */}

            <ul className="permalinks">
                <li><a href="/#">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#experience">Experience</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://twitter.com/cris_fab" target='-blank'><BsTwitter /></a>

                <a href="https://www.instagram.com/yggdrasil_mid" target='-blank'><BsInstagram /></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; Cristian Calderón. All right reserved.</small>
            </div>
        </footer>
    )
}

export default Footer