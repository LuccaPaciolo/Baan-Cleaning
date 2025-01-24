import React from 'react'
import '../Styles/services.css'
import SeviceHeroImage from '../Images/serviice-page-image.png'
import HomeCleaning from '../Images/home-cleaning-new.jpg'
import OfficeCleaning from '../Images/office-cleaning-new.jpg'
import Footer from '../Components/Footer'
import CallToAction from '../Components/CallToAction'
import WhyUs from '../Components/WhyUs'
import IndustrialCleaning from '../Components/IndustrialCleaning'

function Services() {
  return (
    <div className='service-container'>
        <div className="service-hero-section">
        
          <div className="service-hero-text">
            <h1>Our Comprehensive Cleaning Solutions</h1>
            <p>Dependable, meticulous, and affordable cleaning services.</p>
          </div>
          <div className="service-hero-image">
            <img src={SeviceHeroImage} alt="" />
          </div>
      
        </div>
        <div className="services">
            <div className="home-cleaning-service">
              <div className="home-cleaning-service-text">
              <h3>Home Cleaning Services</h3>
              <p>Baans Cleaning is a leading cleaning and janitorial service based in Canada. With years of expertise, we have earned a reputation for providing outstanding cleaning services for homes and offices alike.</p>
              </div>
              <div className="home-cleaning-service-image">
              <img src={HomeCleaning} alt="home-cleaning" />
              </div>
       
            </div>
            <div className="office-cleaning-service">
              <div className="office-cleaning-service-text">
              <h3>Office Cleaning Services</h3>
              <p> We ensure a spotless and hygienic workspace tailored to meet the needs of your business. Our highly trained team uses eco-friendly products and advanced cleaning techniques to maintain a clean and safe environment, promoting productivity and well-being. Whether you require daily, weekly, or customized cleaning schedules, we deliver efficient, reliable services that keep your office looking its best while adhering to the highest industry standards.</p>
              </div>
              <div className="office-cleaning-service-image">
              <img src={OfficeCleaning} alt="office-cleaning" />
              </div>
            
            </div>
            
        </div>
        <IndustrialCleaning/>
        <WhyUs/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Services