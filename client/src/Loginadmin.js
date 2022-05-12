import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { Card } from '@material-ui/core';

const Loginadmin = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();

    const loggin=()=>{
        if (email=="admin@gmail.com" && password=="admin"){
            alert("email and password is correct")
            // localStorage.setItem('user', JSON.stringify(response));
            navigate("/frontpageadmin")
        }
        else{
            alert("Incorrect email and password")
        }
    }
  return (
    <div>
              <Card style={{width:"200px",marginLeft:"calc(50% - 100px)",marginTop:"20px",padding:"20px"}}>


    <label>Email: </label>
    <TextField 
    id="outlined-basic" 
    variant="outlined"
    size="small"
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    />
    <br/>
    <br/>
    <label>Password: </label>
    <TextField 
    id="outlined-basic" 
    variant="outlined"
    size="small"
    type="password"
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    />
    <br/>
    <br/>
    <Button variant="contained" onClick={loggin}>Login</Button>
    </Card>
    </div>
  )
}

export default Loginadmin