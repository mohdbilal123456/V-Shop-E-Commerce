import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <>
      <div className="contact">
            <form action="https://formspree.io/f/xvgrnanl" method='post'>
                  <input type="text" placeholder='Enter Your Name ...' required />
                  <input type="email" placeholder='Email' name='email' required/>
                  <textarea name="message" placeholder='Message' id="" required></textarea>
                  <button>Submit</button>

            </form>
      </div>
      
    </>
  )
}
