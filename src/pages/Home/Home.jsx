import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
const Home = () => {
  return (

    <div>

      <Navbar />
      <Button title = "Login" color = "Red"/>
      <Button title = "Register" color = "Blue"/>

    <section id="home">
        <div className="container">
            <h2>Welcome to Digital Pathshala</h2>
            <p>Your one-stop solution for online education. Learn from the best, at your own pace.</p>
        </div>
    </section>

    <section id="about">
        <div className="container">
            <h2>About Us</h2>
            <p>Digital Pathshala is dedicated to providing high-quality online education. Our mission is to make learning accessible to everyone, anywhere.</p>
        </div>
    </section>

    <section id="courses">
        <div className="container">
            <h2>Our Courses</h2>
            <div className="course-list">
                <div className="course">
                    <h3>Web Development</h3>
                    <p>Learn the latest web technologies and frameworks.</p>
                </div>
                <div className="course">
                    <h3>Data Science</h3>
                    <p>Master data analysis, visualization, and machine learning.</p>
                </div>
                <div className="course">
                    <h3>Digital Marketing</h3>
                    <p>Become an expert in SEO, SEM, and social media marketing.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div className="container">
            <h2>Contact Us</h2>
            <p>Email: info@digitalpathshala.com</p>
            <p>Phone: +123 456 7890</p>
        </div>
    </section>

    <Footer />
    
    </div>
    
    
  )
}

export default Home