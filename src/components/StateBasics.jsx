import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setName]= useState("Abhi");
    var [input,setInput] = useState();
    const changeName = () => {
        console.log("Button clicked");
        setName(input);
    };
const inputHandler = (e) =>{
    console.log(e);
    console.log(e.target.value);
    setInput(e.target.value);
}
  return (
    <div style={{textAlign: 'center', marginTop:'5%'}}>
        <Typography variant='h3'>Hello {name}</Typography>
        <br /><br />
        <TextField variant='standard'label='Name' onChange={inputHandler}/>
        <Button variant='contained'onClick={changeName}>Change</Button>
      
    </div>
  )
}

export default StateBasics
