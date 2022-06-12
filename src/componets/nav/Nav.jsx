import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUserAdd, AiOutlineMail} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {useState} from 'react'



const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav>
            {/* eslint-disable-next-line */}
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUserAdd /></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><MdOutlineWorkOutline /></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiOutlineMail /></a> 
        </nav>
    )
}

export default Nav
