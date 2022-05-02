import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

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
    <label>Email: </label>
    <TextField 
    id="outlined-basic" 
    variant="outlined"
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    />
    <br/>
    <br/>
    <label>Password: </label>
    <TextField 
    id="outlined-basic" 
    variant="outlined"
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    />
    <br/>
    <br/>
    <Button variant="contained" onClick={loggin}>Login</Button>
    </div>
  )
}

export default Loginadmin