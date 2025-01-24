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
            <p>Discover the Baans Cleaning advantage with our dependable, meticulous, and budget-friendly cleaning services in Canada. Rely on our eco-conscious methods for a pristine environment.</p>
        </div>      

        <div className="discover-images">
          <div className="kitchen">
          <img src={KitchenCleaning} alt="Kitchen-Cleaning"/>
          </div>
          <div className="bathroom">
          <img src= {BathroomCleaning}alt="Bathroom-Cleaning"/>
          </div>
          <div className="floor">
          <img src= {FloorCleaning}alt="Floor-Cleaning"/>      
          </div>
 
            
            
        </div>
    </div>
  )
}

export default Discover