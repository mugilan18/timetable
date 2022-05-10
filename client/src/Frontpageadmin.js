import {  Grid } from '@mui/material'
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import "./index.css"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
//   backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  alignItems:"center",
  paddingLeft:"90%"
  
}));

const Frontpageadmin = () => {
    const [period1,setPeriod1]=useState("free")
    const [period2,setPeriod2]=useState("free")
    const [period3,setPeriod3]=useState("free")
    const [period4,setPeriod4]=useState("free")
    const [period5,setPeriod5]=useState("free")
    const [period6,setPeriod6]=useState("free")

    const [period7,setPeriod7]=useState("free")
    const [period8,setPeriod8]=useState("free")
    const [period9,setPeriod9]=useState("free")
    const [period10,setPeriod10]=useState("free")
    const [period11,setPeriod11]=useState("free")
    const [period12,setPeriod12]=useState("free")

    const [period13,setPeriod13]=useState("free")
    const [period14,setPeriod14]=useState("free")
    const [period15,setPeriod15]=useState("free")
    const [period16,setPeriod16]=useState("free")
    const [period17,setPeriod17]=useState("free")
    const [period18,setPeriod18]=useState("free")


    const [period19,setPeriod19]=useState("free")
    const [period20,setPeriod20]=useState("free")
    const [period21,setPeriod21]=useState("free")
    const [period22,setPeriod22]=useState("free")
    const [period23,setPeriod23]=useState("free")
    const [period24,setPeriod24]=useState("free")

    const [period25,setPeriod25]=useState("free")
    const [period26,setPeriod26]=useState("free")
    const [period27,setPeriod27]=useState("free")
    const [period28,setPeriod28]=useState("free")
    const [period29,setPeriod29]=useState("free")
    const [period30,setPeriod30]=useState("free")

    const [period31,setPeriod31]=useState("free")
    const [period32,setPeriod32]=useState("free")
    const [period33,setPeriod33]=useState("free")
    const [period34,setPeriod34]=useState("free")
    const [period35,setPeriod35]=useState("free")
    const [period36,setPeriod36]=useState("free")

    const [year,setYear]=useState()
    const [semester,setSemester]=useState()
    const [department,setDepartment]=useState()
    const [section,setSection]=useState()

    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        navigate("/")
    }
    const view =()=>{
      localStorage.clear()
      navigate("/alltable")
  }




    const display = () => {
let monday=[period1,period2,period3,period4,period5,period6]
let tuesday=[period7,period8,period9,period10,period11,period12]
let wednesday=[period13,period14,period15,period16,period17,period18]
let thursday=[period19,period20,period21,period22,period23,period24]
let friday=[period25,period26,period27,period28,period29,period30]
let saturday=[period31,period32,period33,period34,period35,period36]
let day1 = {"day":"Monday", "period1": period1, "period2": period2, "period3": period3, "period4": period4,"period5": period5, "period6": period6 }
let day2 = {"day":"Tuesday", "period1": period7, "period2": period8, "period3": period9, "period4": period10,"period5": period11, "period6": period12 }
let day3 = {"day":"Wednesday", "period1": period13, "period2": period14, "period3": period15, "period4": period16,"period5": period17, "period6": period18 }
let day4 = {"day":"Thursday", "period1": period19, "period2": period20, "period3": period21, "period4": period22,"period5": period23, "period6": period24 }
let day5 = {"day":"Friday", "period1": period25, "period2": period26, "period3": period27, "period4": period28,"period5": period29, "period6": period30 }
let day6 = {"day":"Saturday", "period1": period31, "period2": period32, "period3": period33, "period4": period34,"period5": period35, "period6": period36 }
let array =[day1,day2,day3,day4,day5,day6]
console.log(array,semester,department,year,section)


fetch(`http://localhost:4000/createtable`, {
  method: "POST",

  body: JSON.stringify({
    array,semester,department,year,section

}),
headers: {
  "Content-type": "application/json; charset=UTF-8"
}
})
  .then( response => response.json() )
  .then( response => {console.log(response)
    alert(response.msg)
  
  } );
    }



  return (
    <div>
       
    
        <AppBar position="static" style={{backgroundColor:"#4C4B5D"}}>
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Time Table
          </Typography>
          <Typography variant="h6" component="div" onClick={view} sx={{ flexGrow: 1 }}>
            list view
          </Typography>
          <Typography variant="h6" component="div" onClick={logout}>
            logout
          </Typography>
         
        </Toolbar>
      </AppBar>
   <br/>
   <br/>
    {/* <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <Grid item><h3> welcome {user.role}</h3></Grid>
    <Grid item> <h4>{user.name}</h4></Grid>
    </Grid> */}

    <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
>
    <Grid item>
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
      </Grid>
    <Grid item>       <FormControl >
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
</Grid>
    <Grid item>         <FormControl >
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
</FormControl></Grid>
    <Grid item>Section <input  value={section} onChange={e=>setSection(e.target.value)}></input></Grid>
    </Grid>

<br/><br/>
<div style={{width:'800px',paddingLeft:"100px"}}>
    <table >
  <tr>
    <th>Day</th>
    <th>Period 1 </th>
    <th>Period 2 </th>
    <th>Period 3 </th>
    <th>Period 4 </th>
    <th>Period 5 </th>
    <th>Period 6 </th>
  </tr>

  <tr>
    <td>Monday</td>
    <td><input
        value={period1}
        onChange={(event) => setPeriod1(event.target.value)}
        /></td>
    <td><input
        value={period2}
        onChange={(event) => setPeriod2(event.target.value)}
        
        /></td>
    <td><input
        value={period3}
        onChange={(event) => setPeriod3(event.target.value)}
      
        /></td>
    <td><input
        value={period4}
        onChange={(event) => setPeriod4(event.target.value)}
      
        /></td>
    <td><input
        value={period5}
        onChange={(event) => setPeriod5(event.target.value)}
        /></td>
    <td><input
        value={period6}
        onChange={(event) => setPeriod6(event.target.value)}
        
        /></td>
  </tr>




  <tr>
    <td>Tuesday</td>
    <td><input
        value={period7}
        onChange={(event) => setPeriod7(event.target.value)}
        
        /></td>
    <td><input
        value={period8}
        onChange={(event) => setPeriod8(event.target.value)}
        
        /></td>
    <td><input
        value={period9}
        onChange={(event) => setPeriod9(event.target.value)}
        
        /></td>
    <td><input
        value={period10}
        onChange={(event) => setPeriod10(event.target.value)}
        
        /></td>
    <td><input
        value={period11}
        onChange={(event) => setPeriod11(event.target.value)}
        
        /></td>
    <td><input
        value={period12}
        onChange={(event) => setPeriod12(event.target.value)}
        
        /></td>
  </tr>






  <tr>
    <td>Wednesday</td>
    <td><input
        value={period13}
        onChange={(event) => setPeriod13(event.target.value)}
        
        /></td>
    <td><input
        value={period14}
        onChange={(event) => setPeriod14(event.target.value)}
        
        /></td>
    <td><input
        value={period15}
        onChange={(event) => setPeriod15(event.target.value)}
        
        /></td>
    <td><input
        value={period16}
        onChange={(event) => setPeriod16(event.target.value)}
        
        /></td>
    <td><input
        value={period17}
        onChange={(event) => setPeriod17(event.target.value)}
        
        /></td>
    <td><input
        value={period18}
        onChange={(event) => setPeriod18(event.target.value)}
        
        /></td>
  </tr>






  <tr>
    <td>Thursday</td>
    <td><input
        value={period19}
        onChange={(event) => setPeriod19(event.target.value)}
        
        /></td>
    <td><input
        value={period20}
        onChange={(event) => setPeriod20(event.target.value)}
        
        /></td>
    <td><input
        value={period21}
        onChange={(event) => setPeriod21(event.target.value)}
        
        /></td>
    <td><input
        value={period22}
        onChange={(event) => setPeriod22(event.target.value)}
        
        /></td>
    <td><input
        value={period23}
        onChange={(event) => setPeriod23(event.target.value)}
        
        /></td>
    <td><input
        value={period24}
        onChange={(event) => setPeriod24(event.target.value)}
        
        /></td>
  </tr>







  <tr>
    <td>Friday</td>
    <td><input
        value={period25}
        onChange={(event) => setPeriod25(event.target.value)}
        
        /></td>
    <td><input
        value={period26}
        onChange={(event) => setPeriod26(event.target.value)}
        
        /></td>
    <td><input
        value={period27}
        onChange={(event) => setPeriod27(event.target.value)}
        
        /></td>
    <td><input
        value={period28}
        onChange={(event) => setPeriod28(event.target.value)}
        
        /></td>
    <td><input
        value={period29}
        onChange={(event) => setPeriod29(event.target.value)}
        
        /></td>
    <td><input
        value={period30}
        onChange={(event) => setPeriod30(event.target.value)}
        
        /></td>
  </tr>






  <tr>
    <td>Saturday</td>
    <td><input
        value={period31}
        onChange={(event) => setPeriod31(event.target.value)}
        
        /></td>
    <td><input
        value={period32}
        onChange={(event) => setPeriod32(event.target.value)}
        
        /></td>
    <td><input
        value={period33}
        onChange={(event) => setPeriod33(event.target.value)}
        
        /></td>
    <td><input
        value={period34}
        onChange={(event) => setPeriod34(event.target.value)}
        
        /></td>
    <td><input
        value={period35}
        onChange={(event) => setPeriod35(event.target.value)}
        
        /></td>
    <td><input
        value={period36}
        onChange={(event) => setPeriod36(event.target.value)}
        
        /></td>
  </tr>





</table>
<br/><br/>
<Button onClick={display} variant="contained">submit</Button>
</div>


    </div>
  )
}

export default Frontpageadmin




