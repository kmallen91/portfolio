import React from 'react'

export default function Homepage() {


    return (
        <div className='homepage-container'>
            <div className='description'>
            <h1> Kevin Michael Allen </h1>
             <h2> Software Engineer </h2>
               
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