import React from 'react'
import './Introduction.css'

function Introduction() {
  return (
    <section id='introduction'>
      <div className='grid-container'>
        <div className="main-div">
        <p className="question">Hi, my name is</p>
        <p className="name">Ayoub Said.</p>
        <p className="slogan">I build Plugins.</p>
        <p className="description">
        I am an experienced software developer with a passion for creating efficient and effective solutions. Over the past four years, I have designed and implemented numerous projects, including over 50 custom Minecraft plugins using the Spigot/Paper API. I have collaborated with prominent servers and content creators to create successful, large-scale projects.
        </p>
      </div>
      </div>
    </section>
  )
}

export default Introduction