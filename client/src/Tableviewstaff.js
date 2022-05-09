import { useLocation } from 'react-router-dom';
import React, { useEffect,useState } from 'react'
import MaterialTable from 'material-table'
import AppBar from '@mui/material/AppBar';
import {useNavigate} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Tableviewstaff = () => {
    const {state} = useLocation();
    const [tabledata,setTabledata]=useState({})
    const [update,setUpdate]=useState(true)
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:4000/gettable`, {
            method: "POST",
          
            body: JSON.stringify({
              semester:state.semester,
              department:state.department,
              year:state.year,
              section:state.section
          
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

    },[update])

   const editthisrow =(changes)=>{
    let array = tabledata.timeperiod
    console.log("first array",array)
    delete changes._id; 
    
    if(changes.day=="Monday"){
        array[0]=changes
    }
    if(changes.day=="Tuesday"){
        array[1]=changes
    }
    if(changes.day=="Wednesday"){
        array[2]=changes
    }
    if(changes.day=="Thursday"){
        array[3]=changes
    }
    if(changes.day=="Friday"){
        array[4]=changes
    }
    if(changes.day=="Saturday"){
        array[5]=changes
    }
    let semester=state.semester
    let department=state.department
    let year=state.year
    let section=state.section
    console.log("arrya",array)

    fetch(`http://localhost:4000/edittable`, {
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
    alert("success")
    setUpdate(!update)
  
  } );
    

}
const logout =()=>{
  localStorage.clear()
  navigate("/")
}
  return (
     
    <div>
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
        
        <div style={{padding:"50px"}}>
         <h2>Time Table</h2>
      <h4>   Department: {state.department}<br/> Year:{state.year}<br/> Semester:{state.semester}<br/> ssection:{state.section}
      </h4>
         </div>
         {tabledata.timeperiod?   <MaterialTable
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
      editable={{
        // onBulkUpdate: changes =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       resolve();
        //     }, 1000);
        //   }),     
        onRowUpdate: changes =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
                editthisrow(changes)
              resolve();
            }, 1000);
          }),  
    //     onRowDelete: oldData =>
    //       new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           resolve();
    //         }, 1000);
    //       }),     
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
        </div>
  )
}

export default Tableviewstaff



















































































