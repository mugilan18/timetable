import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import student from "./student.jpg"
import logo from "./log3.png"
import staffandadmin from './staffandadmin.jpg'

import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  alignItems:"center",
  paddingLeft:"800px"
}));

const Home = () => {
  return (
    
 
    <div style={{marginTop:"20px"}}>
      
     <Grid 
         container
         direction="row"
         justifyContent="space-around"
         alignItems="center"
        >
  <Grid item >
  <img
        height="150px"
        width="150px"
        style={{borderRadius:"100px"}}
        src={logo}
        alt="staff and admin"
      />
   
    </Grid>
    <Grid item style={{textAlign:"center",paddingRight:"150px"}}>
    <h1 style={{fontSize:'50px'}}>
    Idhaya College</h1>
    <h1 style={{color:"#373737"}}> of Arts & Science For Women
    </h1>
   
    <h2 style={{fontSize:'30px'}}>
    Time Table
    </h2>
    </Grid>
  
    </Grid>
    <br/> <br/> <br/> <br/>
        <Grid 
         container
         direction="row"
         justifyContent="space-around"
         alignItems="center"
        >


  <Grid item >
  <Card sx={{ maxWidth: 345 }} >
      <img
        height="200"
        width="100%"
        src={staffandadmin}
        alt="staff and admin"
      />
    
      <CardContent style={{background:"grey"}}>
        <Typography gutterBottom variant="h5" component="div">
          Staff and Admin
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The managers of world's greatest resource
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/staffandadmin" style={{textDecoration:'none'}}><Button  variant="contained" >Login</Button></Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </CardActions>
    </Card>
</Grid>

  <Grid item >
  <Card sx={{ maxWidth: 345 }}>
      <img
       
       height="200"
       width="100%"
        src={student}
        alt="Student"
      />
      <CardContent style={{background:"grey"}}>
        <Typography gutterBottom variant="h5" component="div">
          Student
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The legends of next generation
        </Typography>
      </CardContent>
      <CardActions>
          
      <Link to="/login" style={{textDecoration:'none'}}><Button  variant="contained" >Login</Button></Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/register" style={{textDecoration:'none'}}><Button variant="contained" >Register</Button></Link>
    
      </CardActions>
    </Card>
  </Grid>
  </Grid>
       

    </div>
  )
}

export default Home