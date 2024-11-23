import React from 'react'
import Btn from './components/Btn';

const Page = async () => {
  console.log("hello world");

  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const response = await data.json()
  console.log(response)

  return (
    <>
      <h1>Hello world!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi veniam quidem dolore. Veniam deserunt doloribus provident voluptate fuga voluptates porro iure architecto reiciendis numquam, in impedit explicabo eligendi fugiat? Minus!</p>
      <Btn/>

      {response.map(item =>{
        return <h1 key={item.id}>{item.name}</h1>
      })}

    </>
  )
}

export default Page

// "use client"

// import React, { useEffect, useState } from 'react'

// const page = () => {
//   const [data , setData] = useState(null)
//   useEffect(() => {
//     async function getData() {
//       const data = await fetch('https://jsonplaceholder.typicode.com/users')
//       const response = await data.json()
//       console.log(response)
//       setData(response)
//     }

//     getData()
//   }, [])
//   return (
//     <>
//     <div>page</div>
//     {data ? data.map((item) => {
//       return <h1 key={item.id}>{item.name}</h1>
//     }): <h1>Loading...</h1>}
//     </>
//   )
// }

// export default page