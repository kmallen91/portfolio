import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {


    return (
        <div className='homepage-container'>
            <div className='description'>
                Kevin Allen <br/>
                Software Engineer
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