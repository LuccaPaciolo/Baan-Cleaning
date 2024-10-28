import React from 'react'
import Logo from '../Images/Baans Clearning.png'
import Hamburger from '../Images/ham.svg'
import X from '../Images/X-logo.svg'
import Facebook from '../Images/facebook.svg'
import Instagram from '../Images/instagram.svg'
import Close from '../Images/close.svg'
import { Link } from 'react-router-dom'
import '../Styles/navStyle.css'
import { useState } from 'react'

function Nav() {
    const [showNav, setShowNav] = useState(false)

    const navToggler = ()=> {
        setShowNav(!showNav)    }

    const removeNav = ()=> {
        setShowNav(false)
    }
    
  return (
    <div className='nav-container'>
        <div className="logo">
            <Link to='/Home'>
             <img  onClick={removeNav} src={Logo} alt="baansure-logo" /></Link>
           
        </div>
        <div className="hamburger">
            {!showNav && <img onClick={navToggler} src={Hamburger} alt="hamburger" />}
            {showNav && <img onClick={navToggler} className='nav-close' src={Close} alt="hamburger" />}
        </div>
        <div className= {showNav? 'mobile-view':'desktop-view'}>
            <Link onClick={removeNav} to='/'></Link>
            <Link onClick={removeNav} to='/About'>About</Link>
            <Link onClick={removeNav} to='/Booking'>Booking</Link>
            <Link onClick={removeNav} to='/Services'>Services</Link>
            <Link onClick={removeNav} to='/Contact'>Contact</Link>
           
        </div>
        <div className="social-icons">
            {/* <img src={X} alt="X-logo" /> */}
            <a href="https://www.facebook.com/share/p/UeEBvrxQ9BvBQFzy/" target='_blank'rel='noreferrer'> <img src={Facebook} alt="facebook-logo" /></a>
            <a href="https://www.instagram.com/baanssurecleaning?utm_source=qr&igsh=dnowazhvdnVwbzFy" target='_blank'rel='noreferrer'><img src={Instagram} alt="instagram-logo" /></a>
           
        
        </div>        

    </div>





  )
}

export default Nav