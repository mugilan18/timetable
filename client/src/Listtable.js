import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AppBar from '@mui/material/AppBar';
import {useNavigate} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';

const Listtable = () => {
    const navigate = useNavigate();

    const [value,setValue]=useState()
    const [value2,setValue2]=useState()
    const [count,setCount]=useState()
    useEffect(()=>{
        fetch(`http://localhost:4000/all`)
        .then(response => response.json())
        .then(data => {setValue(data)
        console.log(data) });
    },[])
    const logout =()=>{
        localStorage.clear()
        navigate("/")
    }
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
        {value ?
            <MaterialTable
style={{width:"50%",marginLeft:'25%',marginTop:"100px"}}
            title="Time Table"
      columns={[
        { title: 'Department', field: 'department' },
        { title: 'Year', field: 'year' },
        { title: 'Semester', field: 'semester' },
        { title: 'Section', field: 'section' },
      ]}
      data={
        value
      }
      onRowClick={(evt,rowData)=>{
          setValue2(rowData)
          setCount(rowData.timeperiod.length)
          console.log(count)
          console.log(rowData)
        }}
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

{count >1 ?
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
        value2.timeperiod
      }
      options={{
        actionsColumnIndex: -1,pageSize:6,headerStyle: {
          zIndex:0
        }     
      }}
  
    />:
    <>
    <br/><br/>
    <h2 style={{textAlign:"center"}}>Table not created</h2>
    </>
    }
    </div>
  )
}

export default Listtable