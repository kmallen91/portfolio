import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {

    return (
        <div className='about-container'>
            <div className='about-section'>
                <h2 className='about-title'>About Me</h2>
                <p className='about-text'> Former Chef who left working in Michelin rated restaurants to pursue Web Development. I've taken my hunger to learn about different cultures
                    and cuisines and applied them to creating amazing products through programming and web development. </p>
                <p className='about-text-2'> I'm now a Full Stack Developer based in the San Francisco Bay Area. I have strong foundations in
                Javascript with an emphasis in React. I am proficient with Cloud technologies and have an AWS Certification as a Cloud Practitioner. Also proficient in Node/Express as 
                well as HTML, CSS/SASS and Python with Flask. I'm always looking for the next challenge to learn more and expand my horizons.
                </p>
                <Link className='about-project-link' to='/projects'> Check out my most recent projects here! </Link>
            </div>
            
        </div>
    )
}
