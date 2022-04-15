import React from 'react'
import './contact.css'
export default function Contact() {
    return (
    <div className='contact'>
        <form className='contact-form'>
          <h2>Contact Us</h2>
          <input className='form-input' placeholder='First Name' type='text' required></input>
          <input className='form-input' placeholder='Last Name' type='text' required></input>
          <input className='form-input' placeholder='Email' type='email' required></input>
          <textarea className='form-input-message' placeholder='Message' rows='5' type='text' required></textarea>

          <button className='form-button' type='submit'>Send</button>
        </form>
    </div>
  )
}

