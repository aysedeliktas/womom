import React, { useEffect, useState } from 'react'
import "./ProfileStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import Navbar from '../../components/navbar/Navbar'
import { getLocalStorage } from '../../utils/LocalStrManager'
import ProfileBigIcon from '../../icons/ProfileBigIcon'

function Profile() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setUserData(getLocalStorage('formData'));
  }, [])

  return (
    <div className='profile-container'>
      <PageHead pageName={"Profil"} lastPath={""} />
      <div className="profile-child-container">
        <span className='profile-icon'>
          <ProfileBigIcon />
          <p className='profile-user-name'>{`${userData?.firstName} ${userData?.lastName}`}</p>
        </span>
       {/*   <span className='profile-content'>
          <p className='profile-label'>İsim</p>
         <span className='content-value'>
            {`${userData?.firstName} ${userData?.lastName}`}</span>
        </span> */}
        <span className='profile-content'>
          <p className='profile-label'>Bebeğin Cinsiyeti</p>
          <span className='content-value'>{`${userData?.babyGender}`}</span>
        </span>
        <span className='profile-content'>
          <p className='profile-label'>Beklenen Doğum Tarihi</p>
          <span className='content-value'>{`${userData?.estimatedDueDate}`}</span>
        </span>
      </div>
      <Navbar />
    </div>
  )
}

export default Profile