import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const headerSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/rafael-katz-5a7128101/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/rkatz36368" target="_blank" rel="noreferrer"><AiFillGithub /></a>
        </div>
    )
}

export default headerSocials
