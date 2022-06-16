import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_07ml4zd', 'template_y4vrspe', form.current, 'lOde7USgr8hOAuerh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>cristianfab90@gmail.com</h5>
                        <a href="mailto:cristianfab90@gmail.com" target="_blank" rel='noreferrer' className='btn send-email'>Send a email</a>
                    </article>
                    <article className="contact_option">
                        <AiOutlineWhatsApp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+34 676624418</h5>
                    </article>
                </div>

                {/* Final de las opciones de contacto */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'> Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact