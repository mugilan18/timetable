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
import teacher from './teacher.jpg'
import admin from './Admin.jpg'
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
    
 
    <div style={{marginTop:"50px"}}>
    

     <Grid 
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
        >
  <Grid item >
    </Grid>
    <h1>
  Idhaya College of Arts and Science - Time table
    </h1>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    </Grid>
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
        src={admin}
        alt="Admin"
      />
    
      <CardContent style={{background:"grey"}}>
        <Typography gutterBottom variant="h5" component="div">
          Admin
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The managers of Time table Idhaya College
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/loginadmin" style={{textDecoration:'none'}}><Button  variant="outlined" >Login</Button></Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </CardActions>
    </Card>
</Grid>

  <Grid item >
  <Card sx={{ maxWidth: 345 }} >
      <img
        height="200"
        width="100%"
        src={teacher}
        alt="Teacher"
      />
    
      <CardContent style={{background:"grey"}}>
        <Typography gutterBottom variant="h5" component="div">
          Teacher
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The managers of world's greatest resource
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/loginstaff" style={{textDecoration:'none'}}><Button  variant="outlined" >Login</Button></Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/registerstaff" style={{textDecoration:'none'}}><Button variant="outlined" >Register</Button></Link>
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
          
      <Link to="/login" style={{textDecoration:'none'}}><Button  variant="outlined" >Login</Button></Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/register" style={{textDecoration:'none'}}><Button variant="outlined" >Register</Button></Link>
    
      </CardActions>
    </Card>
  </Grid>
  </Grid>
       

    </div>
  )
}

export default Home