// "use client"

// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import React from 'react'

// const Home = () => {

//   const router = useRouter()

//   const gotoabout = ()=>{
//     router.push('/about')
//   }
//   return (
//     <>
//       <h1 className='text-center'>Hello world!</h1>
//       <Link href={'/about'}>about</Link> <br /><br />
//       <Link href={'/users'}>users</Link> <br /><br />
//       <button onClick={gotoabout}> About</button>
//     </>
//   )
// }

// export default Home



// // SSR + CSR
// // Routing (Dynamic, nested)
// // Loading.js
// // error.js
// // not-found.js
// // Data fetching scenarios(dynamic and static) 
// // Image Component

// next vs nest 

// redux-toolkit || zustand


import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Home = async () => {
  const data = await fetch('https://api.imgflip.com/get_memes')
  const response = await data.json()
  console.log(response.data.memes);

  return (
    <>
      <h1 className='text-center text-2xl'>Meme maker</h1>
      <div className='flex justify-center gap-5 flex-wrap'>
        {response.data.memes.map(item => {
          return <div key={item.id}>
            <Image
              src={item.url}
              width={200}
              height={200}
              alt={item.name}
            />
            <p>{item.name.slice(0, 10)}...</p>
            <Link href={{
              pathname: "creatememe",
              query: {
                url: item.url,
                id: item.id
              }
            }}><button className='bg-blue-400 px-5 py-3 rounded my-3'>Generate this meme</button></Link>
          </div>
        })}
      </div>
    </>
  )
}

export default Home