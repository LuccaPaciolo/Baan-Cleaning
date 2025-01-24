import React from 'react'
import CleanHome from '../Images/why-us-image.jpg'
import WhyUsCard from '../Data/WhyUsCard.js'
import '../Styles/whyUs.css'

function WhyUs() {
  return (
    <div className='why-choose-container'>
        <div className="why-choose-use-section">
        <div className="why-us-text">
            <h3>Why Choose Baans Cleaning</h3>
            <p>Discover why Baans Cleaning is your top choice for professional home cleaning.</p>
          </div>
          <div className="why-us-image">
            <img src={CleanHome} alt="clean-home" />
          </div>
   
        </div>
        
        <div className="why-us-cards">
            {WhyUsCard.map((item)=> (
                 <div key={item.id} className="cards">
                 <h4>{item.heading}</h4>
                 <p>{item.text}</p>
               </div>
            ))}
         
   
        </div>
    </div>
  )
}

export default WhyUs