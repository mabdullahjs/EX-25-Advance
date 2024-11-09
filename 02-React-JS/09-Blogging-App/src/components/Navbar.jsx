import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOutUser } from '../config/firebase/firebasemethods'

const Navbar = () => {
    const [user , setUser] = useState(true)

    const navigate = useNavigate()
    return (
        <>
            <div className="navbar bg-primary text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                {user ? <div className="flex-none">
                    <div className="dropdown dropdown-end text-black">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <div className="">
                            <a className="btn btn-ghost text-xl">Muhammad Abdullah</a>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'dashboard'}>Dashboard</Link></li>
                            <li onClick={()=>{
                                signOutUser()
                                .then((res)=>{
                                    console.log(res);
                                    navigate('/login')
                                }).catch((err)=>{
                                    console.log(err);
                                })
                            }}>Logout</li>
                        </ul>
                    </div>
                </div> : <div className="">
                    <a className="btn btn-ghost text-xl">Login</a>
                </div>}
                
                
            </div>
        </>
    )
}

export default Navbar