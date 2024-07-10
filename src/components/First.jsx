import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <input placeholder='username' />
        <br /><br />
        <input type="password" placeholder='password' />
        <br /><br />
        <button>Login</button>
        <br /><br /><br /><br />
        <Typography variant= 'h1'>Login page</Typography>
        <TextField variant='outlined' label='username'/>
        <br />
        {/* <Button variant="text" color="error">Login</Button>
        <Button variant="contained" color="secondary">Contained</Button> */}
        <Button variant="outlined" color="success">Login</Button>

    </div>
    
  )
}

export default First
