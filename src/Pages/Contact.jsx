import React, { useState } from 'react'
import Cleaning3 from '../Images/cleaning-3.jpg'
import Footer from '../Components/Footer'
import '../Styles/contact.css'
import ArrowDown from '../Images/angle-down.svg'
import ArrowUp from '../Images/angle-up.svg'
import Testimonial from '../Components/Testimonial'
import TestimonialData from '../Data/TestimonialData'
import CallToAction from '../Components/CallToAction.jsx'


function Contact() {
  const [firstResponse, setFirstResponse] = useState(false)
  const [secondResponse, setSecondResponse] = useState(false)
  const [thirdResponse, setThirdResponse] = useState(false)

  const firstResponseToggle = ()=> {
    setFirstResponse(!firstResponse)
  }
  const secondResponseToggle = ()=> {
    setSecondResponse(!secondResponse)
  }
  const thirdResponseToggle = ()=> {
    setThirdResponse(!thirdResponse)
  }
 
  const fetchTestmonial = TestimonialData.map(item => {
    return (
      <div>
        <Testimonial
          key = {item}
          {...item}
        />
      </div>
    )
  })
  

  return (
    <div className='contact-container'>
        <div className="contact-background">
          <img src={Cleaning3} alt="" />
        </div>
        <div className="contact-background-text">
          <h3>Get in Touch with Us</h3>
          <p>Contact Baan Cleaning for Exceptional Home and Office Cleaning</p>
        </div>
        <div className="contact-and-faq">
        <div className="contact-info">
          <h4>Spotless Clean Homes with Baan Cleaning</h4>
       
        <div className="address">
          <h6>Address</h6>
          <h4>3179 checknita Way Sw Edmonton</h4>
          {/* <p>john doe street </p> */}
        </div>
        <div className="telephone">
          <h6>Telephone</h6>
          <p>+1 587 429 6403</p>
         {/* <p>xxxxxxx (Local)</p>  */}
        </div>
        <div className="email">
          <h6>Email</h6>
          <p>Quote@baanscleaning.com</p>
       
        </div>
  
      </div>
      <div className="faq">
        <div className="faq-intro">
          <h3>FAQ</h3>
          <p>Explore our frequently asked questions</p>
        </div>      
        <div className="quest-1">
          <div className="question">
            <h4>How often should I set up a home cleaning service?</h4>
            {!firstResponse && <img onClick={firstResponseToggle} src={ArrowDown} alt="arrow-down" />}
            {firstResponse && <img onClick={firstResponseToggle}  src={ArrowUp} alt="arrow-up" />}
          </div>
          {firstResponse && <div className="response">
            <p>We offer tailored cleaning schedules to suit your needs. Opt for weekly, bi-weekly, monthly, or one-time deep cleans.</p>
          </div>}
        </div>
        <div className="quest-2">
          <div className="question">
              <h4>How often should I set up a home cleaning service?</h4>
              {!secondResponse && <img onClick={secondResponseToggle} src={ArrowDown} alt="arrow-down" />}
              {secondResponse && <img onClick={secondResponseToggle}  src={ArrowUp} alt="arrow-up" />}
            </div>
            {secondResponse && <div className="response">
              <p>We offer tailored cleaning schedules to suit your needs. Opt for weekly, bi-weekly, monthly, or one-time deep cleans.</p>
            </div>}
        </div>
        <div className="quest-3">
          <div className="question">
              <h4>How often should I set up a home cleaning service?</h4>
              {!thirdResponse && <img onClick={thirdResponseToggle} src={ArrowDown} alt="arrow-down" />}
              {thirdResponse && <img onClick={thirdResponseToggle}  src={ArrowUp} alt="arrow-up" />}
            </div>
           {thirdResponse &&  <div className="response">
              <p>We offer tailored cleaning schedules to suit your needs. Opt for weekly, bi-weekly, monthly, or one-time deep cleans.</p>
            </div>}
          </div>
        </div>

        </div>
      
        <div className="user-testimonial">
          <h3>What Our Clients Say</h3>
          <p>Don't just take our word for it! Hear from our satisfied clients who appreciate our exceptional cleaning services and unwavering commitment to detail. Read their stories with Baan Cleaning.</p>
        </div>
            <div className="testimonial">
            {fetchTestmonial}
            </div>
          

       
      
      

        <CallToAction/>

        <Footer/>
    </div>
  )
}

export default Contact