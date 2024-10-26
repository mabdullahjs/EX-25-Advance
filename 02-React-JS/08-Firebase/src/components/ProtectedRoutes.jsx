import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ component }) => {
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
                setLoading(false)
            } else {
                navigate('/login')
            }
        });

    }, [])

    // use navigate
    const navigate = useNavigate()
    return (
        loading ? <h1>Loading...</h1> :  component
    )
}

export default ProtectedRoutes
