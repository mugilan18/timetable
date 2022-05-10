import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [department,setDepartment]=useState("")
    const [year,setYear]=useState("")
    const [semester,setSemester]=useState("")
    const [section,setSection]=useState("")
    const register =()=>{
        console.log(email)
        console.log(password)
        console.log(name)
        console.log(department)
        console.log(year)
        console.log(semester)
      
     
        fetch(`http://localhost:4000/register`, {
            method: "POST",
         
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                department: department,
                year: year,
                semester: semester,
                section:section,

                role:'student'
      
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
            .then( response => response.json() )
            .then( response => {console.log(response.msg)
              alert(response.msg)
              navigate("/login")
            
            } );
    }
  return (
    <div>
        <Card style={{width:"200px",marginLeft:"calc(50% - 100px)",marginTop:"20px",padding:"20px"}}>
        
        <label>Name: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        size="small"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />

      
        <br/>
        <br/>
        <FormControl >
  {/* <InputLabel id="demo-simple-select-label">Semester</InputLabel> */}
  <label>Department</label>
  <Select
    
    value={department}
    size="small"
    onChange={(e)=>{setDepartment(e.target.value)}}
  >
    <MenuItem value={"B.Sc Mathematics"}>B.Sc Mathematics</MenuItem>
    <MenuItem value={"B.Sc Computer Science"}>B.Sc Computer Science</MenuItem>
    <MenuItem value={"B.Sc Physics"}>B.Sc Physics</MenuItem>
    <MenuItem value={"B.Com Corporate Secretrayship"}>B.Com Corporate Secretrayship</MenuItem>
    <MenuItem value={"B.Sc Bio-Chemistry"}>B.Sc Bio-Chemistry</MenuItem>
    <MenuItem value={"B.Com General"}>B.Com General</MenuItem>
    <MenuItem value={"B.A English Literature"}>B.A English Literature</MenuItem>
    <MenuItem value={"B.C.A"}>B.C.A</MenuItem>
    

  </Select>
</FormControl>
        <br/>
        <br/>
        {/* <label>Year: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={year}
        onChange={(e)=>{setYear(e.target.value)}}
        /> */}
         <FormControl >
  {/* <InputLabel id="demo-simple-select-label">Semester</InputLabel> */}
  <label>Year</label>
  <Select
    
    value={year}
    size="small"
    onChange={(e)=>{setYear(e.target.value)}}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    
  </Select>
</FormControl>
        <br/>
        <br/>
        <FormControl >
  {/* <InputLabel id="demo-simple-select-label">Semester</InputLabel> */}
  <label>semester</label>
  <Select
    
    value={semester}
    size="small"
    onChange={(e)=>{setSemester(e.target.value)}}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={6}>6</MenuItem>
  </Select>
</FormControl>


        {/* <label>Semester: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={semester}
        onChange={(e)=>{setSemester(e.target.value)}}
        /> */}
        <br/>
        <br/>
        <label>Section: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        size="small"
        value={section}
        onChange={(e)=>{setSection(e.target.value)}}
        />
        <br/>
        <br/>
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
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
         <br/>
        <br/>
        <Button variant="contained" onClick={register}>Register</Button>
        </Card>
    </div>
  )
}

export default Register