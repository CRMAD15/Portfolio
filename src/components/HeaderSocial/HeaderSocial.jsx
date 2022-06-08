import React from 'react';
import './header-social.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/cristian-calderon-web-dev" target="_blank" rel='noreferrer' ><BsLinkedin /></a>
            <a href="https://github.com/CRMAD15" target="_blank" rel='noreferrer' ><BsGithub /></a>

        </div>
    );
}

export default HeaderSocial;
