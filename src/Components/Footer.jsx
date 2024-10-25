import React from 'react'
import '../Styles/footer.css'
import Logo from '../Images/Baans Clearning.png'
import X from '../Images/X-logo.svg'
import Facebook from '../Images/facebook.svg'
import Instagram from '../Images/instagram.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-logo">      
            <Link to='/Home'>
             <img src={Logo} alt="baansure-logo" /></Link>
            <div className='line'></div>
        </div>
       
        <div className="social-links"> 
        <div className="comp-name">
            <h3>Baans Cleaning</h3>
        </div>
        <div className="social-icons">
        <img src={X} alt="X-logo" />
            <img src={Facebook} alt="facebook-logo" />
            <img src={Instagram} alt="instagram-logo" />
        </div>          
     
        </div>
        
    </div>
  )
}

export default Footer