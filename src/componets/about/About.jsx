import React from 'react'
import './about.css'
import myPic from '../../assets/images/rafael_foto.jpeg'
import {GiBeard} from 'react-icons/gi'
import {BiBuilding} from 'react-icons/bi'
import {AiOutlineYoutube} from 'react-icons/ai'

const About = () => {
    return (
        <section id="about">
            <h1>Conheça-me</h1>
            <h1>Melhor</h1>
            <div className="container about__container"> 
                <div className="about__me">
                    <div className="about__me-image">
                        {/* eslint-disable-next-line */}
                        <img src={myPic} alt="About Image" /> 
                    </div>
                </div>
            

                <div className="about__content"> 
                    <div className="about__cards"> 
                        <article className="about__card">
                                <GiBeard className="about__icon"/>
                            <h5>Experiencia</h5>
                            <small>2+ Anos Trabalhando</small>
                        </article>
                        <article className="about__card">
                                <BiBuilding className="about__icon"/>
                            <h5>Trabalhando Atualmente</h5>
                            <small>FullStack developer na Deloitte</small>
                        </article>
                        <article className="about__card">
                                <AiOutlineYoutube className="about__icon"/>
                            <h5>Youtube</h5>
                            <small>Videos no Youtube sobre Google Maps no Vue</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi quis vitae odit, ipsam nisi voluptatibus commodi sunt quo ut repellendus facere vero culpa, ullam amet eligendi animi numquam repellat.
                    </p>
                        {/* eslint-disable-next-line */}
                    <a href="#contact" className="btn btn-primary">Vamos Conversar!</a>
                </div>
            </div>
        </section>
    )
}

export default About
