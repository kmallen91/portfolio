import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {


    return (
        <div className='homepage-container'>
            <div className='description'>
            <h1> Kevin Michael Allen </h1>
             <h2> Software Engineer </h2>
               <p> Full Stack Developer based in the San Francisco Bay Area. Strong foundations in
                Javascript with an emphasis in React. Also proficient in Node/Express and am currently
                learning Python with Django. Always looking to learn more and expand my horizons.
                </p>
            </div>
            <div className='homepage-icons'>
                <a href='https://www.linkedin.com/in/kevin-allen-9033b9190/'>
                    <img className='icon' src={require('../images/linked-in-icon.png')} alt='' />
                </a>
                <a href='https://github.com/kmallen91'>
                    <img className='icon' src={require('../images/github-icon.png')} alt='' />
                </a>
                
            </div>
        </div>
    )
}