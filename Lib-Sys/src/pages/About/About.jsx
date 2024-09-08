/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css';
import aboutImg from "../../assets/about-img.jpg"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt='about img' />
          </div>

          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Books</h2>
            <p className='fs-17'>Lorem ispurfjdkdhudhfdfhsfjsdfjhdfjhgfhdgfdhbnvbfdjgrggfhdbv</p>
            <p className='fs-17'>xypz qbdfkdhfudfdvjfjdfhg</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About