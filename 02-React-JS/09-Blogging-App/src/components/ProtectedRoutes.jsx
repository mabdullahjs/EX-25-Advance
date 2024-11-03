import React, { useState } from 'react'

const ProtectedRoutes = ({component}) => {
    const [user , setUser] = useState(false);
    return (
        user ? component : <h1>Loading...</h1>
    )
}

export default ProtectedRoutes