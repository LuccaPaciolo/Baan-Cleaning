import React from 'react'
import Cleaning1 from '../Images/cleaning-1.jpg'
import Cleaning2 from '../Images/cleaning-2.jpg'
import Cleaning3 from '../Images/cleaning-3.jpg'
import Cleaning4 from '../Images/cleaning-4.jpg'
import Cleaning5 from '../Images/cleaning-5.jpg'
import Cleaning6 from '../Images/cleaning-6.jpg'
import Footer from '../Components/Footer'
import '../Styles/about.css'
import { Link } from 'react-router-dom'
import BkImage from '../Images/cleaning-kitchen.jpg'
import Profile from '../Components/Profile'


function About() {
  return (
    <div className='about-container'>
      <div className="about-background">
        <img src={BkImage} alt="cleaning-staff" />

        <div className="bk-text">
         <h2>We Clean!</h2>
          <p>Baans Cleaning: Premier Cleaning Services in Canada</p>           
      </div>
      </div>   
          
      
       
             
     <div className="about-text-section">
     <div className="about-text-image">
              <img className='cleaning' src={Cleaning1} alt="" />
            </div>
      <div className="about-text">
            <p>With over 15 years of experience, we believe that a clean environment is a happy environment. Our mission is to provide top-quality cleaning services that consistently exceed expectations. </p>

            <p>  Backed by a team of highly experienced and dedicated professionals, we offer a comprehensive range of cleaning solutions tailored to meet diverse needs. 
            </p>        

            <p>We are committed to using eco-friendly products and practices to ensure the safety of your family and the environment. Let us handle the cleaning, so you can focus on what matters most.</p>
            </div> 

          
          
          </div>     
      
        <div className="pictures">
          <img src={Cleaning5} alt="" />
          <img src={Cleaning3} alt="" />                 
          <img src={Cleaning4} alt="" />
          <img src={Cleaning2} alt="" />
           
       
   
        </div>
        <div className="call-to-action">
          <div className="call-image">
            <img src={Cleaning6} alt="" />
          </div>
          <div className="call-text">
            <h3>Start your journey to a spotless space</h3>
            <p>Experience the difference with Baans Cleaning – professional, friendly, and exceptional cleaning services for your home and office. Contact us today!</p>
            <ul>
              <li>Reliable and Friendly</li>
              <li>Meticulous and Thorough</li>
              <li>Affordable and Adaptable</li>
              <li>Eco-Friendly Cleaning</li>
              <li>Experienced and Skilled Staff</li>
            </ul>
            <div className="call-buttons">
            <button className='book' ><Link style={{textDecoration:'none', color:'black'}} to='/Booking'>Book Now</Link></button>
            <button className='discover'><Link style={{textDecoration:'none', color:'white'}} to='/Services'>Discover More</Link></button>
          </div>
          </div>
        
        </div>
        <Profile/>
        <Footer/>
    </div>
  )
}

export default About