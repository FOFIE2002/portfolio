import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
const HeaderSocial = () => {
     return (
         <div className='header__social'>
             <a href='https://linkedin.com/in/fofie-fopa-elisabeth-2a652b255' target='blank'><BsLinkedin/> </a>
             <a href='https://github.com/FOFIE2002' target='blank'><FaGithub/> </a>
             <a href='https://www.facebook.com/profile.php?id=100018484920554' target='blank'><FaFacebookF/> </a>
             <a href='https://twitter.com/ElisabethFofie?t=RAHEoXL_R-p4kg5FIgPBnQ&s=09' target='blank'><CgTwitter/> </a>
        </div>
    )
}
export default HeaderSocial