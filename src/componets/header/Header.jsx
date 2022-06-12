import React from 'react'
import './header.css'
import CTA from './CTA'
import WordCloud from '../../assets/images/Word Art.png'
import HeaderSocials from './headerSocials'

const header = () => {
    return (
        <header>
            <section className="headerSection">
                <div className="container header__container">
                    <h5>Ola, Sou</h5>
                    <h1>Rafael Katz</h1>
                    <h5 className="text-light">Desenvolvedor fullstack</h5>
                    <CTA />
                    <HeaderSocials />
                    
                    <div className="WordCloud">
                        <img src={WordCloud} alt="WordCloud"></img>
                    </div>
                    <a href="#contact" className="scroll__down">Scroll Down</a>
                </div>
            </section>
        </header>
    )
}

export default header

// WordCloud created by https://wordart.com/create 