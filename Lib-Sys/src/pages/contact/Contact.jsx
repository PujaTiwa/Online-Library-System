/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, email, message);
  }

  return (
    <form className='contact-form'>
    <div className='contact'>
      <div className='input-contact'>
        <lable htmlFor="name">Name</lable>
        <input className='input' type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className='input-contact'>
        <lable htmlFor="email">Email</lable>
        <input className='input' type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className='input-contact'>
        <lable htmlFor="message">Message</lable>
        <textarea className='input' type='message' name='message' value={message} onChange={e => setMessage(e.target.value)} />
      </div>

      <button className="btn" type='submit' onClick={handleSubmit}>Contact Me</button>
      </div>

    </form>
  )
}

export default Contact