import { useState } from 'react'

import { AiOutlineHome, AiOutlineMessage, AiOutlineUser, AiOutlineProject } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'

import './Nav.css'

export default function Nav () {
    const [ active, setActive ] = useState('#')
    return (
        <nav>
            <a href="#" 
                onClick={() => setActive('#')} 
                className={active === '#' ? 'active' : ''}>     
                <AiOutlineHome></AiOutlineHome>
            </a>
            <a href="#about" 
                onClick={() => setActive('#about')} 
                className={active === '#about' ? 'active' : ''}>
                <AiOutlineUser></AiOutlineUser>
            </a>
            <a href="#experience" 
                onClick={() => setActive('#experience')} 
                className={active === '#experience' ? 'active' : ''}>
                <BiBook></BiBook>
            </a>
            <a href="#portfolio" 
                onClick={() => setActive('#portfolio')} 
                className={active === '#portfolio' ? 'active' : ''}>
                <AiOutlineProject></AiOutlineProject>
            </a>
            <a href="#contact" 
                onClick={() => setActive('#contact')} 
                className={active === '#contact' ? 'active' : ''}>
                <AiOutlineMessage></AiOutlineMessage>
            </a>
        </nav>
    )
}