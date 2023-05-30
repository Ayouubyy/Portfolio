import React from 'react'
import './Contact.css'
import discord from './mediaicons/icons8-discord-48.png'
import instagram from './mediaicons/icons8-instagram-48.png'
import gmail from './mediaicons/icons8-gmail-48.png'
import phoneNumber from './mediaicons/icons8-phone-number-48.png'

function Contact() {
  return (
    <section id='contact'>
        <p className='title'>Socials:</p>
        <div className='contact-container'>
            <div className='info-container'>
                <img className="contact-icon" src={gmail} />  
                <p className='contact-info'>ayoubyysaidyy@gmail.com</p>
                <img className="contact-icon" src={phoneNumber} /> 
                <p className='contact-info'>+21629329814</p>
            </div>
            <div className='socials-container'>
                <img className="contact-icon" onClick={() => navigator.clipboard.writeText('Ayouub#5449')} title="Click to copy!" src={discord} />
                <p className='contact-info' title="Click to copy!" onClick={() => navigator.clipboard.writeText('Ayouub#5449')}>Ayouub#5449</p>
                <a href='https://www.instagram.com/ayoub_saidyy/'><img className="contact-icon" src={instagram} /></a>
                <a href='https://www.instagram.com/ayoub_saidyy/'><p className='contact-info'>ayoub_saidyy</p></a>
            </div>
        </div>
    </section>
  )
}

export default Contact