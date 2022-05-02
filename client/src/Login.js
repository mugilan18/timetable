import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

;
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();

    const loggin =()=>{
        console.log(email,password)
        fetch(`http://localhost:4000/login`, {
            method: "POST",
         
            body: JSON.stringify({
                email: email,
                password: password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
            .then( response => response.json() )
            .then( response => {console.log(response)
              
              if(response.error){
                 alert("check for email and password")

              }
              else{
                alert("email and password is correct")
                localStorage.setItem('user', JSON.stringify(response));
                navigate("/frontpage")
              }
          
            } )
            // .catch(res =>{
            //   console.log(res)
            //   // alert("check for email and password")
            // }
            // );
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

export default Login