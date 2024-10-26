import React, { useEffect, useState } from 'react'
import BasicCard from '../components/Card'
import { Box, Card, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    fetch('https://course-admission-portal.vercel.app/api/v1/student')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setStudent(res)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // usenavigate
  const navigate = useNavigate()

  const singlestudent = (item) => {
    navigate(`/product/${item.nationalID}`)
  }
  return (
    <>
      <Typography variant='h3' className='text-center m-5'>All Students</Typography>
      {loading && <CircularProgress />}
      {error && <Typography className='text-center m-5'>Server Error 404</Typography>}
      <Box className="d-flex justify-content-center gap-5 flex-wrap">
        {student && student.map((item) => {
          return <BasicCard key={item._id} title={item.fullName} email={item.email} func={()=>singlestudent(item)} />
        })}
      </Box>
    </>
  )
}

export default Product