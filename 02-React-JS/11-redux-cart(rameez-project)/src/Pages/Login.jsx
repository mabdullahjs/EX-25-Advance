import { Box, Typography,TextField,Button} from '@mui/material'
import React from 'react'

function Login() {
  return (
    <>
    <Box className=" bg-danger-subtle">
    <Box className="  d-flex flex-column container justify-content-center gap-5" sx={{
         height: '100vh',
        width: '30%'
    }}>
     <Typography variant="h3" color="initial" className='text-center'>Login User</Typography>
     <TextField id="outlined-basic1" label="email" type="email" variant="outlined" />
     <TextField id="outlined-basic2" label="password" type="password" variant="outlined" />
     <Button variant="contained">Login</Button>

     <Box className="text-center">
      <Typography variant="subtitle1" color="initial">Doesn't have an account? <span className="text-decoration-underline text-primary">Sign Up</span></Typography>
      <Typography variant="subtitle1" color="initial">Forgot <span className="text-decoration-underline text-primary">Username / Password</span></Typography>
     </Box>

    </Box>      
    </Box>
   
    </>
  )
}

export default Login