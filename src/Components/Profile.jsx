import React from 'react'
import '../Styles/profile.css'
import CompanyProfile from '../Images/Baans_Cleaning_Company_Profile.pdf'
function Profile() {
  return (
    <div className='company-profile'>
        <div className="profile-text">
            <h2>Baans Cleaning</h2>
            <p>Get to know more about us</p>
            <p>Download our Company Profile</p>
        </div>
        <div className="profile-button">
        <a href={CompanyProfile}  target="_blank" rel="noopener noreferrer">  Get Profile</a>
        </div>
       
    </div>
  )
}

export default Profile