import {Grid } from '@mui/material'
import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom';
import MaterialTable from 'material-table'
import { styled } from '@mui/material/styles';
import "./index.css"
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

const Frontpage = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    const [tabledata,setTabledata]=useState({})
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        navigate("/")
    }

    useEffect(()=>{
      fetch(`http://localhost:4000/gettable`, {
  method: "POST",

  body: JSON.stringify({
    semester:user.semester,
    department:user.department,
    year:user.year,
    section:user.section

}),
headers: {
  "Content-type": "application/json; charset=UTF-8"
}
})
  .then( response => response.json() )
  .then( response => {console.log(response.timeperiod)
    // alert(response.msg)
    
  setTabledata(response)
  } );
    },[])
  return (
    <div>

      <AppBar position="static" style={{backgroundColor:"#4C4B5D"}}>
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Time Table
          </Typography>
          
          <Typography variant="h6" component="div" onClick={logout}>
            logout
          </Typography>
         
        </Toolbar>
      </AppBar>
    
   <br/>
   <br/>
    <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <Grid item><h3> welcome {user.role}</h3></Grid>
    <Grid item> <h4>{user.name}</h4></Grid>
    </Grid>
{tabledata.timeperiod ?
    <MaterialTable
      title="Time Table"
      columns={[
        { title: 'Day', field: 'day' },
        { title: 'Period1', field: 'period1' },
        { title: 'Period2', field: 'period2' },
        { title: 'Period3', field: 'period3' },
        { title: 'Period4', field: 'period4' },
        { title: 'Period5', field: 'period5' },
        { title: 'Period6', field: 'period6' },
      
      ]}
      data={
        tabledata.timeperiod
      }
      options={{
        actionsColumnIndex: -1,pageSize:6,headerStyle: {
          zIndex:0
        }     
      }}
  
    />
    :
    <div style={{padding:"50px"}}>
   <h3>Admin Has Not provided Time Table Yet...</h3> 
    </div>
    }
</div>


  )
}

export default Frontpage