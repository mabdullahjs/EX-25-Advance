import React from 'react'

const SingleUser = async ({ params: { id } }) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await data.json();
    console.log(response);
    return (
        <>
            <h1 className='text-center text-2xl'>Single User {id}</h1>

            <div>
                <h1>FullName: {response.name}</h1>
                <h1>Username: {response.username}</h1>
                <h1>Email: {response.email}</h1>

            </div>
        </>
    )
}

export default SingleUser