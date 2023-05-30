import React from 'react'
import './Header.css'

function Header() {
    const aboutClick = () => {
        const element = document.getElementById("about");
        element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    };
    const skillsClick = () => {
        const element = document.getElementById("skills");
        element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
    const contactClick = () => {
      const element = document.getElementById("contact");
      element.scrollIntoView({ behavior: 'smooth', block: 'center'});
  };
  return (
    <div className="header">
            <button id="contact-button" onClick={contactClick} className="menu-button">Contact</button>
            <button id="about-button" onClick={aboutClick} className="menu-button">About</button>
            <button id="skills-button" onClick={skillsClick} className="menu-button">Skills</button>
    </div>
  )
}

export default Header