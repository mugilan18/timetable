import { useLocation } from 'react-router-dom';
import React, { useEffect,useState } from 'react'
import MaterialTable from 'material-table'


const Tableview = () => {
    const {state} = useLocation();
    const [tabledata,setTabledata]=useState({})
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

    },[])
  return (
     
    <div>
         {console.log(state)}

         <h2>Time Table</h2>
         Department: {state.department}<br/> Year:{state.year}<br/> Semester:{state.semester}<br/> ssection:{state.section}
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
        </div>
  )
}

export default Tableview