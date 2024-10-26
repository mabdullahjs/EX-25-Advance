import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div>About</div>
            <div className='d-flex justify-content-center gap-5 m-5'>
                <button className='btn btn-primary'><Link className='text-white' to={''}>nested</Link></button>
                <button className='btn btn-primary'><Link className='text-white' to={'nested1'}>nested1</Link></button>
                <button className='btn btn-primary'><Link className='text-white' to={'nested2'}>nested2</Link></button>
                <button className='btn btn-primary'><Link className='text-white' to={'nested3'}>nested3</Link></button>
            </div>
            <Outlet />
        </>
    )
}

export default About