import React from 'react'

export default function Projects() {

    return (
        <div className='project-container'>
            <h2 className='project-title'> Projects </h2>
            <div className='project'>
                <a href='https://www.wildfirewatchapp.com' className='project-link'> Wildfire Watch</a>
                <a href='https://github.com/Lambda-School-Labs/forest-fire-watch-fe' className='project-link'> Github</a>
                <br/>
                <small>Capstone Project - Lambda School</small>
                <p className='project-text'>
                Web application development over two months with 3 other web developers and a data science team that shows the current wildfires within the United States and allows a logged in user to save locations and get text alerts if there is a wildfire within their given radius. Also allows users to toggle an air quality overlay to display the air quality information throughout the United States. <br/>
                Responsible for creating front end components and back end databases to save and display data from users and the data science team. Also built the mapbox overlay to connect our data science team's air quality data to our application's map. <br/>
                Stack:  React, Node, PostgreSQL, Jest, Heroku, Mapbox
                </p>
                
            </div>
            <div className='project'>
                <a href='https://space-cowboys.netlify.com' className='project-link'> Space Cowboy</a>
                <a href='https://github.com/python-django-unchained' className='project-link'> Github</a>
                    <br/>
                    <small>Full Stack Collaboration</small>
                    <p className='project-text'>
                    Web game created in 4 days in collaboration with 3 other web developers to practice Python with Django. Players can select a planet to land on and explore, whlie discovering different sections throughout. <br/>
                    Responsible for creating front end components in order to display database algorithms and create a moveable player-character as well as unique environments for each planet. <br/>
                    Stack:  React, Python, Django, PostgreSQL, Canvas
                    </p>

            </div>
            <div className='project'>
                <a href='https://baseball-stats.netlify.app/' className='project-link'> Baseball Stats </a>
                    <a href='https://github.com/kmallen91/baseball-site' className='project-link'> Github</a>
                        <br/>
                        <small>Full Stack Developer</small>
                        <p className='project-text'>
                        Continuous personal project displaying MLB teams and players statistics
                        Displaying current MLB teams and active players and their statistics, with future implementation to compare teams and player stats.
                        Responsible for creating the front end interface to display the data as well as logic to sift through API data. Future plans to implement a back end database in Java.
                         <br/>
                         Stack: React, Java
                        </p>
            </div>

        </div>
    )
}