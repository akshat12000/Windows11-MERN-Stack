import React from 'react'
import { useSelector } from 'react-redux'
import './Profile.css'

const Profile = () => {
  const {user} = useSelector(state => state.user)
  return (
    <div className='profile-container'>
      <div className='profile-box'>
        <div className='profile-header'>
          Profile
        </div>
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Registered On:</strong> {new Date(user.date).toDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile