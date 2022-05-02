import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Registerstaff = () => {
  const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [department,setDepartment]=useState("")
    const [year,setYear]=useState("")
    const [semester,setSemester]=useState("")
    const [section,setSection]=useState("")
    const [subject,setSubject]=useState("")
    const [subjectlist,setSubjectlist]=useState("")
    const [classes,setClasses]=useState([])
    const register =()=>{
        console.log(email)
        console.log(password)
        console.log(name)
        // console.log(department)
        // console.log(year)
        // console.log(semester)
        console.log(classes)
      
     
        fetch(`http://localhost:4000/registerstaff`, {
            method: "POST",
         
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                // department: department,
                // year: year,
                // semester: semester,
                class:classes,
                role:'teacher'
      
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

// const register =()=>{
//   console.log(classes)
// }

    const addclass =()=>{
      let tempclass ={
        department:department,
        year:year,
        semester:semester,
        section:section,
      }
      let cls =[...classes,tempclass] 
      setClasses(cls)
      // setSubjectlist("")
      
    }
    const filter = (index) => {

      // let tempsub = [...subject].filter((sub) => sub !== subdel);
      // setSubject(tempsub)
      let tempcls = classes.splice((index-1), 1);
      setClasses(tempcls)
      

    }

  return (
    <div>
        <div>
        
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
        size="small"
        variant="outlined"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
         <br/>
        <br/>

        <TextField 
          style={{paddingBottom:"5px",paddingLeft:"110px"}}
          label="Department"
        id="outlined-basic" 
        variant="outlined"
        size="small"
        value={department}
        onChange={(e)=>{setDepartment(e.target.value)}}
        />
        <br/>
    
      
        <TextField 
          style={{padding:"5px",paddingLeft:"110px"}}
          label="Year"
        id="outlined-basic" 
        variant="outlined"
        size="small"
        value={year}
        onChange={(e)=>{setYear(e.target.value)}}
        />
        <br/>
  
      
        <TextField 
          style={{padding:"5px",paddingLeft:"110px"}}
          label="Semester"
        id="outlined-basic" 
        variant="outlined"
        size="small"
        value={semester}
        onChange={(e)=>{setSemester(e.target.value)}}
        />
        <br/>
        
        <TextField 
          style={{padding:"5px",paddingLeft:"110px"}}
          label="Section"
        id="outlined-basic" 
        variant="outlined"
        size="small"
        value={section}
        onChange={(e)=>{setSection(e.target.value)}}
        />
        <br/>
        <br/>


    
        <Button variant="contained" onClick={addclass}>add class</Button>
        {/* { classes && classes.map(({cls, index}) =><> <li key={index}>Department:{cls.department}, Year:{cls.year}, Semester:{cls.semester}, Section:{cls.section}</li><button onClick={()=>filter(index)}>delete</button></>)
       }             */}
       <br/><br/><br/><br/>
       List of classes
       { 
                classes && classes.map((cls, index) => {
                  return (
                      <li key={index}>
                          Department: {cls.department}, Year:{cls.year}, Semester:{cls.semester}, ssection:{cls.section} <button onClick={()=>filter(index)}>delete</button>
                      </li>
                  );
              })
               }
         <br/>
        <br/>
        <Button variant="contained" onClick={register}>Register</Button>
        </div>
    </div>
  )
}

export default Registerstaff