import React from 'react'
import './footer.css'
import {AiFillLinkedin, AiFillGithub,AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            {/* eslint-disable-next-line */}
            <a href="#" className="footer__logo">Raffi</a>
            <ul className="permalinks">
                {/* eslint-disable-next-line */}
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.facebook.com/rafael.katz.5" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
                <a href="https://github.com/rkatz36368" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/rafael-katz-5a7128101/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            </div>
        </footer>
        
    )
}

export default Footer
