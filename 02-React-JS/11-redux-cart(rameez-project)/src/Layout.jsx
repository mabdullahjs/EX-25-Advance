import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/Navbar'
import { Box } from '@mui/material'

function Layout() {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{
        marginTop: '5rem'
      }}>
      <Outlet/>
      </Box>
    </>
  )
}

export default Layout