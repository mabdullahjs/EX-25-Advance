import { Box, Button, Rating, TextField, Typography } from '@mui/material'
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import React, { useState } from 'react'
import logo from './assets/exp-logo.png'

const App = () => {
  const [value, setValue] = useState(2);
  return (
    <>
      {/* <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Typography variant='h3'>App <AccessAlarmSharpIcon /></Typography>
        <Button variant="contained">Contained</Button>
      </Box> */}

      <Typography variant='h3' className='text-center mt-5'>Hello world</Typography>
      <Box className="d-flex justify-content-center m-5">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>

      <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <img src={logo} alt="logo" />

    </>
  )
}

export default App


// icon
// images