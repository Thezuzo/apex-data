import React from 'react'
import '../styles/components/Contact.css'

const Contact = () => {
    return (
        <div>
            <section className="contact-container">
                <h2>Mande sua mensagem</h2>
                <p>Envie sua mensagem, e em até 4 horas entraremos em contato</p>
                <form>
                    <input type="text" name="name" id="name" placeholder="Seu nome..." />
                    <input type="email" name="email" id="email" placeholder="Seu e-mail" />
                    <textarea name="message" id="message" placeholder="Descreva o que você precisa ou o seu projeto"></textarea>
                    <input type="submit" value="enviar" id="btn" />
                </form>
            </section>
        </div>
    )
}

export default Contact