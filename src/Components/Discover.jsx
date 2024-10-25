import React from 'react'
import FloorCleaning from '../Images/floor-cleaning.jpg'
import BathroomCleaning from '../Images/bathroom-cleaning.jpg'
import KitchenCleaning from '../Images/kitchen-cleaning.jpg'
import '../Styles/discover.css'

function Discover() {
  return (
    <div className='discover-container'>
        <div className="discover-text">
            <h3>Excellence in Canadian Home and Janitorial Services</h3>
            <p>Discover the Baan Cleaning advantage with our dependable, meticulous, and budget-friendly cleaning services in Canada. Rely on our eco-conscious methods for a pristine environment.</p>
        </div>      

        <div className="discover-images">
            <img src={KitchenCleaning} alt="Kitchen-Cleaning"/>
            <img src= {BathroomCleaning}alt="Bathroom-Cleaning"/>
            <img className='floor' src= {FloorCleaning}alt="Floor-Cleaning"/>
      
        </div>
    </div>
  )
}

export default Discover