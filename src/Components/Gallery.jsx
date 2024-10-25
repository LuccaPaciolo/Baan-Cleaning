import React from 'react'
import BathroomCleaning from '../Images/bathroom-cleaning.jpg'
import CarCleaning from '../Images/car-cleaning.jpg'
import CarCleaning2 from '../Images/car-cleaning-2.jpg'
import FloorCleaning from '../Images/floor-cleaning.jpg'
import FloorCleaning2 from '../Images/floor-cleaning-2.jpg'
import KitchenCleaning from '../Images/kitchen-cleaning.jpg'
import KitchenCleaning2 from '../Images/kitchen-cleaning-2.jpg'
import ToiletCleaning from '../Images/toilet-cleaning.jpg'
import VaccumCleaner from '../Images/vaccum-cleaner.jpg'
import VaccumCleaning from '../Images/vaccum-cleaning.jpg'
import WasteBin from '../Images/waste-bin-cleaning.jpg'
import '../Styles/gallery.css'



function Gallery() {
  return (
    <div className='gallery-container'>
        <img src={BathroomCleaning} alt="" />
        <img src={CarCleaning} alt="" />
        <img src={CarCleaning2} alt="" />
        <img src={FloorCleaning} alt="" />
        <img src={FloorCleaning2} alt="" />
        <img src={KitchenCleaning} alt="" />
        <img src={KitchenCleaning2} alt="" />
        <img src={ToiletCleaning} alt="" />
        <img src={VaccumCleaner} alt="" />
        <img src={VaccumCleaning} alt="" />
        <img className='wastebin' src={WasteBin} alt="" />
    </div>
  )
}

export default Gallery