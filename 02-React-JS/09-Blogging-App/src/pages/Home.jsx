import React, { useEffect } from 'react'
import { getAllData } from '../config/firebase/firebasemethods'

const Home = () => {
  useEffect(()=>{
    getAllData('blogs')
    .then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  })
  return (
    <div>Home</div>
  )
}

export default Home