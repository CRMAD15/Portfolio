import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiFillFolderOpen } from 'react-icons/ai'
import { BiBook, BiMessageAltDetail } from 'react-icons/bi'

import "./nav.css"

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#expirience')} className={activeNav === '#expirience' ? 'active' : ''}><BiBook /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillFolderOpen /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>

        </nav >
    );
}

export default Nav;


