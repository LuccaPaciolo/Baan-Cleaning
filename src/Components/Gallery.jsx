import React from 'react'
import '../Styles/gallery.css'

import GalleryDataImages from '../Data/GalleryData.js'

function Gallery() {
  return (
    <div className='gallery-container'>
      {GalleryDataImages.map((item)=> (
        <div key={item.id} className="gallery-images">
          <img src={item.image} alt="images" />
        </div>
      ))}
       
    </div>
  )
}

export default Gallery