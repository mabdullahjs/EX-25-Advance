import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <>
      <Box className="d-flex flex-column container gap-5 justify-content-center" sx={{
        height: '80vh',
        width: '30%'
      }}>
        <Typography variant='h3' className='text-center'>Register User</Typography>
        <TextField id="outlined-basic" label="Email" type='email' variant="outlined" />
        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" />
        <Button variant="contained">Register</Button>


      </Box>
    </>
  )
}

export default Register