import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <h1 className="text-center">Home</h1>
       <br />
     <div className="flex justify-center gap-5">
     <Link href="/about"><button className="btn btn-primary">About</button></Link> <br />
     <Link href="/users"><button className="btn btn-primary">Users</button></Link> <br />
     <Link href="/contact"><button className="btn btn-primary">Contact</button></Link> <br />
     </div>
    </>
  )
}

export default Home