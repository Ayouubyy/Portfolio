import React from 'react'
import './ContactIcons.css'
import discord from './icons/icons8-discord-48.png'
import github from './icons/icons8-github-100.png'
import linkedin from './icons/icons8-linkedin-40.png'

function ContactIcons() {
  return (
    <div style={{position :"fixed"}}>
        <img className="icon" id="discord-click" style={{marginTop: "100px"}} title="Click to copy!" src={discord} />
        <a href="https://github.com/Ayouubyy" target="_blank"><img className="icon" src={github} /></a>
        <a href="https://www.linkedin.com/in/ayoub-said-32ba56254/" target="_blank"><img className="icon" src={linkedin} /></a>
    </div>
  )
}

export default ContactIcons