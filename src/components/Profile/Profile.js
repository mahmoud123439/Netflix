import React from 'react';
import './Profile.css';
import NavBar from '../NavBar/NavBar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className='Profile'>
        <NavBar />
        <div className='ProfileScreen-body'>
          <h1>Edit Profile</h1>
            <div className='ProfileScreen-info'>
              <img 
                src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
                alt=''
              />
              <div className='ProfileScreen-details'>
                <h2>{user.email}</h2>
                <div className='ProfileScreen-plans'>
                  <h3></h3>
                  <button 
                    onClick={() => auth.signOut()}
                    className='ProfileScreen-SignOut'
                  >
                    Sign Out
                  </button>
                </div>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Profile