import React from 'react'

export default function Projects() {

    return (
        <div className='project-container'>
            <h3 className='project-title'> Projects </h3>
            <div className='project'>
                <a href='https://www.wildfirewatchapp.com' className='project-link'> Wildfire Watch</a>
                <a href='https://github.com/Lambda-School-Labs/forest-fire-watch-fe' className='project-link'> Github</a>
                <br/>
                <small>Capstone Project - Lambda School</small>
                <p>
                Web application development over two months with 3 other web developers and a data science team that shows the current wildfires within the United States and allows a logged in user to save locations and get text alerts if there is a wildfire within their given radius. Also allows users to toggle an air quality overlay to display the air quality information throughout the United States. <br/>
                Responsible for creating front end components and back end databases to save and display data from users and the data science team. Also built the mapbox overlay to connect our data science team's air quality data to our application's map. <br/>
                Stack:  React, Node, PostgreSQL, Jest, Heroku, Mapbox
                </p>
                
            </div>
            <div className='project'>
                <a href='https://www.space-cowboys.netlify.com' className='project-link'> Space Cowboy</a>
                <a href='https://github.com/python-django-unchained' className='project-link'> Github</a>
                    <br/>
                    <small>Full Stack Collaboration</small>
                    <p>
                    Web game created in 4 days in collaboration with 3 other web developers to practice Python with Django. Players can select a planet to land on and explore, whlie discovering different sections throughout. <br/>
                    Responsible for creating front end components in order to display database algorithms and create a moveable player-character as well as unique environments for each planet. <br/>
                    Stack:  React, Python, Django, Canvas
                    </p>

            </div>
            <div className='project'>
                <a href='https://dev-libs.now.sh/' className='project-link'> Dev-Libs </a>
                    <a href='https://github.com/bw-ft-Dev-Libs/Front-End' className='project-link'> Github</a>
                        <br/>
                        <small>Front End Developer</small>
                        <p>
                        A web application that allows a user to create their own developer style mad-libs and update them on their profile page.                   
                        4 day project with 2 other front end developers and a back end developer. <br/>
                        Responsible for creating the front end interface to display the data created by users as well as those saved in the database. <br/>
                        Stack:  React
                        </p>
            </div>

        </div>
    )
}