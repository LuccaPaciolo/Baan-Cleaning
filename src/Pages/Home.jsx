import React from 'react'
import LandingPage from '../Components/LandingPage'
import Discover from '../Components/Discover'
import Comprehensive from '../Components/Comprehensive'
import Gallery from '../Components/Gallery'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'
import IndustrialCleaning from '../Components/IndustrialCleaning'

function Home() {

  return (
    <div>
        <LandingPage/>
        <Discover/>
        <Comprehensive/>
        <Gallery/>
        <IndustrialCleaning/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home