import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/foodlie.png'

const Portfolio = () => {
  return (
    <section id= "portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='foodlie'/>
          </div>
          <h3>Foodlie</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/FOFIE2002/Foodlie' className='btn' target='_blank' rel="noreferrer">Github</a>
         
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portfolio'/>
          </div>
          <h3>My Portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/FOFIE2002/portfolio' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://github.com/FOFIE2002/portfolio' className='btn btn-primary'target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}


export default Portfolio