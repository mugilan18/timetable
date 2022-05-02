import {useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import "./index.css"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button ,Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
//   backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  alignItems:"center",
  paddingLeft:"90%"
  
}));

const Frontpagestaff = () => {

    let user = JSON.parse(localStorage.getItem("user"))

    const[period,setPeriod]=useState("free")
    const[staff,setStaff]=useState()
    const[day,setDay]=useState("")
    const[timetable,seTimetable]=useState([])
    const navigate = useNavigate();
    const view =(cls)=>{
      navigate("/tableview",{state:cls})
    }

  return (
    <>
    {console.log(user.class)}
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
      <Grid item><h3> welcome {user.role}</h3></Grid>
      <Grid item> <h4>{user.name}</h4></Grid>
      </Grid>


      { 
                user.class && user.class.map((cls, index) => {
                  return (
                      <>
                        <Card key={index} style={{width:"300px"}}>
<CardContent>

                          Department: {cls.department}<br/> Year:{cls.year}<br/> Semester:{cls.semester}<br/> ssection:{cls.section}
                          </CardContent>
                          <CardActions> <Button variant='contained' onClick={()=>view(cls)}>view</Button></CardActions>
                  </Card >
                 
                  <br/>
                  <br/>
                  </>
                  );
              })
               }




</>
  )
}

export default Frontpagestaff