import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
const About = () => {
  return (
    <div>
        
      <Navbar />
      <Button title= "Register"/>
    

    <section id="about">
        <div className="container">
            <h2>About Us</h2>
            <p>Digital Pathshala is an online learning platform dedicated to providing high-quality education to learners of all ages. Our mission is to democratize education by making it accessible, affordable, and relevant to the needs of the 21st century.</p>
            <p>Founded in 2024, Digital Pathshala has quickly grown into a trusted name in online education. We offer a wide range of courses in various fields, including technology, business, arts, and more. Our team of experienced educators and industry professionals are committed to delivering the best learning experience to our students.</p>
            <p>At Digital Pathshala, we believe that education is a lifelong journey. We are here to support you every step of the way, whether you're looking to advance your career, learn a new skill, or explore a new hobby. Join us and discover a world of learning opportunities!</p>
        </div>
    </section>

    <Footer />


    </div>
  )
}

export default About