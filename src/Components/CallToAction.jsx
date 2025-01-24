import React from 'react'
import '../Styles/callToAction.css'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <div className='call-to-action-container'>

        <div className="call-to-action-text">
            <h3>Start your journey to a spotless space</h3>
            <p>Welcome to Baans Cleaning, your trusted partner in professional cleaning and janitorial services across Canada. Our skilled team delivers exceptional, eco-friendly cleaning solutions for both homes and offices. Transform your space today!</p>
        </div>

        <div className="call-btn">
            <button className='discover'><Link style={{textDecoration:'none', color:'white'}} to='/Services'>Discover More</Link></button>
            <button className='request' ><Link style={{textDecoration:'none', color:'white'}} to='/Booking'>Request a Quote</Link></button>
        </div>
        
    </div>
  )
}

export default CallToAction