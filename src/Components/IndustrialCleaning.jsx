import React from 'react'
import IndstrialVideo from '../Images/industrial-video.mp4'
import '../Styles/industrialKitchen.css'



function IndustrialCleaning() {
  return (
    <div className='industrial-kitchen-cleaning'>
        <div className="industrial-text">
            <h4>Featured Service</h4>
            <h1>Industrial Kitchen Cleaning</h1>
            <p>At Baans Cleaning, we specialize in professional industrial kitchen cleaning services designed to maintain the highest standards of hygiene, safety, and efficiency.</p>
            <p>Our comprehensive cleaning solutions are tailored to meet the needs of restaurants, hotels, catering facilities, food production centers, and other commercial kitchens.</p>
            </div>
        <div className="industrial-video">
               <video controls muted loop playsinline className='video'src={IndstrialVideo}  type="video/mp4"></video>

        </div>
       
    </div>
  )
}

export default IndustrialCleaning