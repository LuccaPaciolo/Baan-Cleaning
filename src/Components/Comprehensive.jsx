import React from 'react'
import '../Styles/comprehensive.css'

function Comprehensive() {

   const compCardData = [  
    {
        heading: 'Consistent and Reliable Regular Cleaning Services',
        text: 'Keep your space fresh and tidy with our regular cleaning service.'
    },
    {

        heading: 'Detailed Deep Cleaning Services',
        text: 'Experience a meticulous deep cleaning for an immaculate home.'
    },
    {

        heading: 'Expert Move-In/Move-Out Cleaning Services',
        text: 'Our move-in/move-out cleaning service ensures a seamless transition to your new space.'
    },
]




  return (
    <div className='comprehensive-container'>
        <div className="comprehensive-text">
            <h3>Our Comprehensive Home and Janitorial Services</h3>
            <p>Reliable, thorough, and affordable cleaning services in Canada. Your space will be spotless.</p>
        </div>
        
        <div className="comprehensive-card">
            {compCardData.map((item)=> (
                <div className="comp-card-text">
                    <h5>{item.heading}</h5>
                    <p>{item.text}</p>
                </div>
            ))}
        
         
          
        </div>
    </div>
  )
}

export default Comprehensive