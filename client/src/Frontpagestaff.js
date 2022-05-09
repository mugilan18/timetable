import {useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import "./index.css"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {Grid} from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Div = styled('div')(({ theme }) => ({
  // ...theme.typography.button,
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
      navigate("/tableviewstaff",{state:cls})
    }
    const logout =()=>{
      localStorage.clear()
      navigate("/")
  }

  return (
    <>
       <AppBar position="static">
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Time Table
          </Typography>
        
          <Typography variant="h6" component="div" onClick={logout}>
            logout
          </Typography>
         
        </Toolbar>
      </AppBar>
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
      <Grid item><h3> welcome {user.role}</h3></Grid>
      <Grid item> <h4>{user.name}</h4></Grid>
      </Grid>

<div style={{ padding:"20px"}}>
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
</div>



</>
  )
}

export default Frontpagestaff