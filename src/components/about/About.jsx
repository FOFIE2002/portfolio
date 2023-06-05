import React from 'react'
import './about.css'
import moi from '../../assets/Eli matriculation.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Elisabeth" />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Less than 1 year</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>No Clients</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>1 Completed</small>
              </article>
            </div>
            <p>
              A young software engineering student studying at the Faculty of Engineering and Technology(FET) in the University of Buea. I am a holder of the GCE Advanced Level Certificate obtained in 2021. I am passionate about using Technology to solve real-world problems. Looking forward to gaining more experience in the tech field. I can express myself in both English and French (average).
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About