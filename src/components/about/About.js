import React from 'react';
import './About.css';

function About() {
  const birthDate = new Date(2005, 9, 9); // Month is 0-indexed: 9 = October
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--; // Birthday hasn't happened yet this year
  }

  return (
    <div className="about-div">
      <p id="about" className="about-header">About me:</p>
      <p className="about-text">
        Hi, I'm Ayoub Said — a {age}-year-old software developer from Tunisia and a pre-engineering student specializing in Maths and Physics. My journey into programming began through my love for mathematics, and since then, I’ve been continuously sharpening my skills through personal projects and exploration of new technologies.
      </p>
    </div>
  );
}

export default About;
