import React, { useRef } from 'react'
import { signUpUser } from '../config/firebase/firebasemethods'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  // use ref
  const fullName = useRef()
  const email = useRef()
  const password = useRef()
  const profilePic = useRef()

  // use navigate
  const navigate = useNavigate()

  const registerUser = (event) => {
    event.preventDefault();


    signUpUser({
      email: email.current.value,
      password: password.current.value,
      fullname: fullName.current.value
    }).then((res) => {
      console.log(res)
      navigate('/login');

    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <h1 className='text-center text-2xl mt-5'>Register</h1>
      <form className='flex flex-col gap-4 justify-center items-center h-[80vh]'>
        <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" ref={fullName} />
        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" ref={email} />
        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" ref={password} />
        <input type="file" className="file-input w-full max-w-xs" ref={profilePic} />
        <button type='submit' className="btn btn-primary" onClick={registerUser}>Register</button>

      </form>
    </>
  )
}

export default Register