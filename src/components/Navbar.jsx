import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button >
            <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
            Login
            </Link>
            
            </Button>
            <Button >
            <Link to={"/reg"} style={{textDecoration:"none", color:"white"}}>
            Register
            </Link>
            
            </Button>
            <Button >
            <Link to={"/tab"} style={{textDecoration:"none", color:"white"}}>
            Table
            </Link>
            
            </Button>
            <Button >
            <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
            Log Out
            </Link>
            </Button>
            <Button >
            <Link to={"/s"} style={{textDecoration:"none", color:"white"}}>
             StateBasis
            </Link>
            </Button>
            <Button >
            <Link to={"/c"} style={{textDecoration:"none", color:"white"}}>
             Counter
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
