import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'


const Counter = () => {
    var [count,setCount]=useState(0);
    const add = () =>{
        setCount(++count);
    }
    const sub = () =>{
        setCount(--count);
    }
  return (
    <div>
      <div style={{textAlign: 'center', marginTop:'5%'}}></div>
      <Typography variant='h3'>{count}</Typography>
      <br />
      <Button variant='contained' onClick={add}>+</Button>&nbsp;&nbsp;
      <Button variant='contained'onClick={sub}>-</Button>
    </div>
  )
}

export default Counter
