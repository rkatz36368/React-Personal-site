import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useRef } from 'react'

function Contact () {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rp5r9v4', 'template_f7zl1js', form.current, 'bpFCHv_qvCqH7fsdd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset()
      };
    
    return (
        <section id="contact">
            <h5>Entrar em contato</h5>
            <h2>Contate-Me!</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>rkatz36368@gmail.com</h5>
                        <a href="mailto:rkatz36368@gmail.com">Mande uma mensagem!</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Rafael Katz</h5>
                        <a href="https://m.me/rafael.katz.5" target="_blank"  rel="noreferrer">Mande uma mensagem!</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>(21)998940712</h5>
                        <a href="https://api.whatsapp.com/send?phone++5521998940712">Mande uma mensagem!</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Seu nome" required />
                    <input type="email" name="Email" placeholder="Seu Email"/>
                    <textarea name="message" rows="7" placeholder="Sua Mensagem" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
