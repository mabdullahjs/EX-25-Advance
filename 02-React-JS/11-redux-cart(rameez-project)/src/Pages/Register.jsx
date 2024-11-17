import React from 'react'
import { Box, Typography,TextField,Button} from '@mui/material'

function Register() {
  return (
    <>
    <Box className=" bg-danger-subtle ">
    <Box className=" d-flex flex-column container justify-content-center gap-5 " sx={{
         height: '100vh',
        width: '30%'
    }}>
     <Typography variant="h3" color="initial" className='text-center'>Register User</Typography>
     <TextField id="outlined-basic1" label="email" type="email" variant="outlined" />
     <TextField id="outlined-basic2" label="password" type="password" variant="outlined" />
     <Button variant="contained">Login</Button>

     
    </Box>      
    </Box>
   
    </>
  )
}

export default Register