import React from 'react'
import '../Styles/services.css'
import Brushing from '../Images/brushing.jpg'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'
import CleanHome from '../Images/clean-home.jpg'
import HomeCleaning from '../Images/home-cleaning.jpg'
import OfficeCleaning from '../Images/office-cleaning.jpg'

function Services() {
  return (
    <div className='service-container'>
        <div className="service-background">
          <img src={Brushing} alt="brushing-floor" />
        </div>
        <div className="service-background-text">
          <h3>Our Comprehensive Cleaning Solutions</h3>
          <p>Dependable, meticulous, and affordable cleaning services.</p>
        </div>
        <div className="services">
            <div className="service-1">
              <div className="service-1-text">
              <h4>Home Cleaning Services</h4>
              <p>Baan Cleaning is a leading cleaning and janitorial service based in Canada. With years of expertise, we have earned a reputation for providing outstanding cleaning services for homes and offices alike.</p>
              </div>
              <div className="service-1-image">
              <img src={HomeCleaning} alt="home-cleaning" />
              </div>
       
            </div>
            <div className="service-2">
              <div className="service-2-text">
              <h4>Office Cleaning Services</h4>
              <p> ensures a spotless and hygienic workspace tailored to meet the needs of your business. Our highly trained team uses eco-friendly products and advanced cleaning techniques to maintain a clean and safe environment, promoting productivity and well-being. Whether you require daily, weekly, or customized cleaning schedules, we deliver efficient, reliable services that keep your office looking its best while adhering to the highest industry standards.</p>
              </div>
              <div className="service-2-image">
              <img src={OfficeCleaning} alt="office-cleaning" />
              </div>
            
            </div>
            
        </div>
        <div className="why-choose-use">
          <div className="why-us-text">
            <h3>Why Choose Baan Cleaning</h3>
            <p>Discover why Baan Cleaning is your top choice for professional home cleaning.</p>
          </div>
          <div className="why-us-image">
            <img src={CleanHome} alt="clean-home" />
          </div>
        </div>
        <div className="service-cards">
          <div className="card-1">
            <h6>Reliable and Professional</h6>
            <p>Reliable, professional cleaners. Timely, high-quality service. Trust us with your space.</p>
          </div>
          <div className="card-2">
            <h6>Affordable and Adaptable</h6>
            <p>Affordable, adaptable cleaning plans designed to meet your specific needs and budget.</p>
          </div>
          <div className="card-3">
            <h6>Experienced and Skilled Team</h6>
            <p>Experience the difference with our skilled team for a truly immaculate home.</p>
          </div>
          <div className="card-4">
            <h6>Thorough and Meticulous</h6>
            <p>Enjoy our meticulous attention to detail for a consistently spotless and refreshing home.</p>
          </div>
        </div>

        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Services