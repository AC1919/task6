import React from 'react'
import './skills.css';
import icon3 from '../../assests/icon3.jpg';
import icon4 from '../../assests/icon4.jpg';
const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills and Works</span>
        <span cassName='skillDesc'>I am a 3rd year BTech student who is passionate about learning new technologies</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={icon3} alt="loading.." className='skillBarImg'/>
            <div className="skillBarText">
              <h2>Web Development</h2>
              <p>HTML,CSS,JAVASCRIPT,MONGODB,REACTJS</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={icon4} alt="loading.." className='skillBarImg'/>
            <div className="skillBarText">
              <h2>Machine Learning with Python</h2>
              <p>Created two projects using python</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default skills
