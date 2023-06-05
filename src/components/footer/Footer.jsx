import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { CgTwitter } from "react-icons/cg";

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#me" className="footer__logo">
          Fofie Fopa Elisabeth
        </a>

        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://linkedin.com/in/fofie-fopa-elisabeth-2a652b255" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/FOFIE2002" target="blank">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100018484920554" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/ElisabethFofie?t=RAHEoXL_R-p4kg5FIgPBnQ&s=09" target="blank">
            <CgTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>@copyright FFE 2023</h3>
        </div>
      </div>
    );
}

export default Footer