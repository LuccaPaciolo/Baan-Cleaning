import React from 'react'
import '../Styles/footer.css'
import Logo from '../Images/Baans Clearning.png'
// import X from '../Images/X-logo.svg'
import Facebook from '../Images/facebook.svg'
import Instagram from '../Images/instagram.svg'
import { Link } from 'react-router-dom'

function Footer() {

  const getYear = new Date().getFullYear()
  return (
    <div className='footer-container'>
      <div className="footer-contents">


        <div className="footer-logo">      
            <Link to='/Home'>
             <img src={Logo} alt="baansure-logo" /></Link>
        </div>
        <div className="important-links">
          <p>Important Links:</p>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Booking'>Booking</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
       
        <div className="social-links"> 
          <p>Social Links:</p>
        {/* <img src={X} alt="X-logo" /> */}
        <a href="https://www.facebook.com/share/p/UeEBvrxQ9BvBQFzy/"target='_blank' rel='noreferrer'> <img src={Facebook} alt="facebook-logo" /></a>
        <a href="https://www.instagram.com/baanssurecleaning?utm_source=qr&igsh=dnowazhvdnVwbzFy"target='_blank' rel='noreferrer'><img className='instagram' src={Instagram} alt="instagram-logo" /></a>       
     
        </div>
              
    </div>
         <div className="copy-right">
            <p>Copyright &copy; {getYear} Baans Cleaning.</p>     
            <p>Powered by: Baans Cleaning</p>
          </div>  
    </div>
  )
}

export default Footer