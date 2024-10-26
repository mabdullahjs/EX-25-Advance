import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            margin: '10px'
        }}>
            <h2><Link to={'/'}>Home</Link></h2>
            <h2><Link to={'login'}>Login</Link></h2>
            <h2><Link to={'register'}>Register</Link></h2>
        </div>
    )
}

export default Navbar