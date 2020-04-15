import React from 'react'


const ContactForm = (props) => (
  <div className='contact-container'>
    <div className='contact-section'>
      <h2 className='contact-title'>Contact Me</h2>
      <h3 className='email-title'>Email:</h3>
      <a className='email-text' href ='mailto:kevin.allen91@gmail.com'>kevin.allen91@gmail.com</a>
      <h3 className='email-title'>LinkedIn:</h3>
      <a className='contact-text' href='https://www.linkedin.com/in/kevinmichaelallen/'>https://www.linkedin.com/in/kevinmichaelallen/</a>
    </div>
  </div>
)

export default ContactForm