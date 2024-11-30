import React from 'react'

const Users = async () => {

    // static rendering with time
    const response = await fetch('https://jsonplaceholder.typicode.com/users' , {
        next: {
            revalidate: 50
        }
    })

    // dynamic rendering
    // const response = await fetch('https://jsonplaceholder.typicode.com/users' , {
    //     cache: 'no-store'
    // })

    const data = await response.json()



  return (
    <>
    <h1>{new Date().toLocaleTimeString()}</h1>
    <div>Users</div>
    {data.map(item =>{
        return <h1 key={item.id}>{item.name}</h1>
    })}
    </>
  )
}

export default Users