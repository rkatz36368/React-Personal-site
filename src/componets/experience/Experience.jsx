import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
    return (
        <section id="experience">
            <h5>Habilidades</h5>
            <h2>Experiencias</h2>
            <div className="container experience__container">
                <div className="expirence__frontend">
                    <h3>Frontend Devolopment</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>HTML</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>Javascript</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>SCSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>Vue</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>React</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>Bootstrap</h4>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__datails-icons"/>
                            <h4>Vuetify</h4>
                        </article>
                    </div>
                </div>
                <div className="expirence__backend">
                    <h3>Backend Devolopment</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__datails-icons"/>
                                <h4>Django</h4>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__datails-icons"/>
                                <h4>Python</h4>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__datails-icons"/>
                                <h4>MongoDB</h4>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__datails-icons"/>
                                <h4>SQL</h4>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__datails-icons"/>
                                <h4>Postgre</h4>
                            </article>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default experience
