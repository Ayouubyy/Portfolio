import React from 'react'
import './Skills.css'
import programming from "./icons/programming.png"
import database from "./icons/database.png"
import webdevelopment from "./icons/webdevelopment.png"
import unity from "./icons/unity.png"
import paper from "./icons/paper.webp"
import java from "./icons/java.png"

function Skills() {
  return (
    <section id='skills'> 
        <p className="main-header">Skills:</p>
        <div className='main-template'>       
        <div className="skill-div">
            <img className='skill-icon' src={programming}/>
            <h3 className="skill-header">Programming languages:</h3>
            <p className="skill-paragraph">I am proficient in Java, C#, HTML, CSS, and JavaScript. I have experience in building complex applications using these languages, including web-based applications and mobile apps. I am comfortable with object-oriented programming and have a strong understanding of data structures and algorithms.</p>
        </div>
        <div className="skill-div">
            <img className='skill-icon' src={database}/>
            <h3 className="skill-header">Database management:</h3>
            <p className="skill-paragraph">I have worked with both SQL and NonSQL databases, including MySQL and MongoDB. I have experience designing and implementing database schemas, optimizing database queries, and using database management tools.</p>
        </div>
        <div className="skill-div">
            <img className='skill-icon' src={webdevelopment}/>
            <h3 className="skill-header">Web development:</h3>
            <p className="skill-paragraph">I have a solid foundation in web development and can build responsive, user-friendly websites using HTML, CSS, and JavaScript. I am familiar with modern web development frameworks such as React and Angular, and have experience working with web development tools like Webpack and Babel.</p>
        </div>
        <div className="skill-div">
            <img className='skill-icon' src={paper}/>
            <h3 className="skill-header">Minecraft plugin development:</h3>
            <p className="skill-paragraph">I have experience developing custom Minecraft plugins using the Spigot/Paper API. I have collaborated with prominent servers and content creators to create successful, large-scale projects. I am familiar with plugin architecture and have experience optimizing plugins for performance.</p>
        </div>
        <div className="skill-div">
            <img className='skill-icon' src={unity}/>
            <h3 className="skill-header">Game development with Unity:</h3>
            <p className="skill-paragraph">While I'm still a beginner in game development with Unity, I have a strong interest in the field and have completed several online courses. I have experience creating simple games and I am excited to continue learning and building more complex projects.</p>
        </div>
        <div className="skill-div">
            <img className='skill-icon' src={java}/>
            <h3 className="skill-header">JavaFX app development:</h3>
            <p className="skill-paragraph">I am a beginner in JavaFX app development but have completed a few online courses and have some experience building simple applications. I'm interested in learning more about building desktop applications with JavaFX.</p>
        </div>
    </div></section>
    
  )
}

export default Skills