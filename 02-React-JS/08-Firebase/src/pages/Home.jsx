import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  

  // use navigate
  const navigate = useNavigate()

  // logout user
  const logoutUser = () => {
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
      <h1 className='text-center m-5'> Home</h1>
      <div className="text-center">
        <button onClick={logoutUser} className='btn btn-primary'>Logout</button>

      </div>
    </>
  )
}

export default Home