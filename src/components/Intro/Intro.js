import React from 'react'
import './Intro.css';

import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm  <span className="introName">Anubhav</span><br/>Frontend Developer</span>
            <p className="introPara">I am a skilled frontend web designer who is eager to learn more and create user friendly websites.</p>
            <Link><button className="btn">Hire Me!</button></Link>
        </div>
        
    </section>
  )
}

export default Intro
