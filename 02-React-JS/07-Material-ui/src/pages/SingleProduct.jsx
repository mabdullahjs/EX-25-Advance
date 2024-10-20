import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const {id} = useParams()
  console.log(id);

  useEffect(()=>{
    fetch(`https://course-admission-portal.vercel.app/api/v1/student/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(err => {
      })
      .finally(() => {
      })
  } , [])

  return (
    <div>SingleProduct {id}</div>
  )
}

export default SingleProduct