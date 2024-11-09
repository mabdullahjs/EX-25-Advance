import React, { useRef } from 'react'
import { loginUser } from '../config/firebase/firebasemethods'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const email = useRef()
  const password = useRef()

  
    // use navigate
    const navigate = useNavigate()

  const loginUsers = (event) => {
    event.preventDefault();
    console.log(email.current.value)
    console.log(password.current.value)
    
    loginUser({
      email: email.current.value,
      password: password.current.value
    }).then((res)=>{
      console.log(res);
      navigate('/')
      
    })

  }
  return (
    <>
      <h1 className='text-center text-2xl mt-5'>Login</h1>
      <form className='flex flex-col gap-4 justify-center items-center h-[80vh]'>
        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" ref={email} />
        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" ref={password} />

        <button type='submit' className="btn btn-primary" onClick={loginUsers}>Login</button>

      </form>
    </>
  )
}

export default Login