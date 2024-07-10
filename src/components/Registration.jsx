import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
        <Typography variant='h3'>Registration Form</Typography>
        <br /><br />
        <TextField variant='outlined' label='Name'/>
        <br />
        <TextField variant='outlined' label='Age'/>
        <br />
        <TextField variant='outlined' label='Place'/>
        <br />
        <TextField variant='outlined' label='Department'/>
        <br />
        <TextField variant='outlined' label='Email'/>
        <br />
        <TextField variant='outlined' label='phone number'/>
        <br /><br />
        <Button variant='contained'>Sign Up</Button>
    </div>
  )
}

export default Registration
