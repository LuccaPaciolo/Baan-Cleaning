import React from 'react'
import '../Styles/landingPageStyle.css'
import LandingVideo from '../Images/landing-video.mp4'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className= 'landing-page-container'>
        <div className="landing-video">
            <video autoPlay muted loop playsinline className='video'src={LandingVideo}   type="video/mp4"></video>
        </div>
        <div className="landing-text">
            <h1>Experience Exceptional Cleaning for Your Home, Office, and More</h1>
            <p>Discover the Art of Cleanliness with Baans Cleaning: Transform your living space with our premium cleaning services. Your home deserves the best care and meticulous attention. Let us infuse perfection into every corner.</p>
            <button className="btn-primary"> <Link style={{textDecoration:'none', color:'white'}} to='/Booking'>Request a Quote</Link></button>
            <button className="btn-Secondary"> <Link style={{textDecoration:'none', color:'white'}} to='/Services'>Find Out More</Link></button>
        </div>
        
    </div>
    
  )
}

export default LandingPage