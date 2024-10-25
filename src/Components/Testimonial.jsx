import React from 'react'
import '../Styles/testimonial.css'

function Testimonial(props) {
  return (
    <div className='testimonial-container'>
      <div className="testimonial-card">
        <div className="user-details">
            <img src={props.image} alt="useer-image" />
            <h4>{props.name}</h4> 
        </div>
        <div className="user-testimony">
            <p>{props.text}</p>
        </div>
        </div>
    </div>
  )
}

export default Testimonial