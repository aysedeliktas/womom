import React, { useEffect, useState } from 'react'
import "./ProfileStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import Navbar from '../../components/navbar/Navbar'
import { getLocalStorage } from '../../utils/LocalStrManager'

function Profile() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setUserData(getLocalStorage('formData'));    
  }, [])

  return (
    <div className='profile-container'>
      <PageHead pageName={"Profil"} lastPath={""} />
      <div className="profile-child-container">
        <p>{userData?.firstName}</p>
        <p>{userData?.lastName}</p> 
        <p>{userData?.babyGender}</p>
        <p>{userData?.estimatedDueDate}</p>
      </div>
      <Navbar />
    </div>
  )
}

export default Profile