import React from 'react'
import './Header.css'

function Header() {
    const aboutClick = () => {
        const element = document.getElementById("about");
        element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
    const skillsClick = () => {
        const element = document.getElementById("skills");
        element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
  return (
    <div className="header">
            <button id="contact-button" className="menu-button">Contact</button>
            <button id="about-button" onClick={aboutClick} className="menu-button">About</button>
            <button id="skills-button" onClick={skillsClick} className="menu-button">Skills</button>
            <button id="experiences-button" className="menu-button">Experiences</button>
    </div>
  )
}

export default Header