import React from 'react'
import '../Styles/booking.css'
import BookingImage from '../Images/cleaning-staff.jpg'
import Footer from '../Components/Footer'
import BookingComp from '../Components/BookingComp'

function Booking() {
  return (
    <div className='booking-container'>
      <div className="booking-background">
        <img src={BookingImage} alt="cleaning-staff" />
      </div>
      <div className="booking-background-text">
        <h3>Book Your Cleaning Now</h3>
        <p>Discover Excellence: Reserve Your Home Cleaning with Baan Cleaning</p>
      </div>
      <div className="booking-text">
        <h3> Book a Professional Home Cleaning Today</h3>
      </div>

      {/* <div style={{ height: '200px', overflowY: 'auto' }}>
        
    </div> */}

    <BookingComp/>
     <Footer/>
    </div>
  )
}

export default Booking