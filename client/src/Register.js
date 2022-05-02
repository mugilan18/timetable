import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Register = () => {
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
            
            } );
    }
  return (
    <div>
        <div>
        
        <label>Name: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />

      
        <br/>
        <br/>
        <label>Department: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={department}
        onChange={(e)=>{setDepartment(e.target.value)}}
        />
        <br/>
        <br/>
        <label>Year: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={year}
        onChange={(e)=>{setYear(e.target.value)}}
        />
        <br/>
        <br/>
        <label>Semester: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={semester}
        onChange={(e)=>{setSemester(e.target.value)}}
        />
        <br/>
        <br/>
        <label>Section: </label>
        <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={section}
        onChange={(e)=>{setSection(e.target.value)}}
        />
        <br/>
        <br/>
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
        <Button variant="contained" onClick={register}>Register</Button>
        </div>
    </div>
  )
}

export default Register