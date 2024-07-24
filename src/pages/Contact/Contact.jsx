import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

const Contact = () => {
  return (
  <div>
      
      
  <Navbar />

      <section id="contact">
        <div className="container">
            <h2>Contact Us</h2>
            <p>If you have any questions, suggestions, or would like more information, please feel free to reach out to us. We are here to help!</p>
            <div className="contact-info">
                <div className="contact-item">
                    <h3>Email</h3>
                    <p>info@digitalpathshala.com</p>
                </div>
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>+123 456 7890</p>
                </div>
                <div className="contact-item">
                    <h3>Address</h3>
                    <p>123 Learning Lane, Knowledge City, Country</p>
                </div>
            </div>
            <form className="contact-form">
                <h3>Send Us a Message</h3>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required/>
                
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
                
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                {/* <button type="submit">Send Message</button> */}

                <Button title = "Submit"/>
            </form>
        </div>
    </section>

    <Footer />
    
  </div>
  )
}

export default Contact