import React, { useState } from 'react'
import { Header } from "../module";
import {Grid, Paper, Avatar, Typography, TextField, Button} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Dialog from '@mui/material/Dialog';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

const ModalPage=()=>{
const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
const [username, setUsername]= React.useState('');
const [email, setEmail] = React.useState('');
const [employeeGender, setEmployeeGender]= React.useState('');
const [employeeRole, setEmployeeRole]= React.useState('');
const [employeeText, setEmployeeText]= React.useState('');
const [allentry, setAllentry]= React.useState([]);
const handleSubmit = (event) => {
  event.preventDefault();
  const newEntry = {username:username,email:email, employeeGender: employeeGender, employeeText:employeeText, employeeRole:employeeRole}
  setAllentry([...allentry,newEntry])
  setOpen(false);
}
    const paperStyle={padding: "10px 20px", width:350, margin:"0px auto"}
    return(
      <div>
   <Header/>
   <Button variant="outlined" onClick={handleClickOpen}>
    Open Registration form dialog
    </Button>
    <Dialog open={open} onClose={handleClose}>
    <Grid align="center">
    <Paper elevation={0} style={paperStyle} >
      <Grid>
      <Avatar>
       </Avatar>
      <h2>Registration</h2>
      <Typography variant="caption">PLease Fill this form</Typography>
      </Grid>
      <TextField fullWidth label="Name"  value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Enter your name" />
      <TextField fullWidth label="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group" style={{display:'initial'}}value={employeeGender} label="Gender" onChange={(e)=> setEmployeeGender(e.target.value)} >
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
     </FormControl>
     <FormControl fullWidth>
     <InputLabel id="demo-simple-select-label">Field</InputLabel>
    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={employeeRole} label="Role" onChange={(e)=> setEmployeeRole(e.target.value)} >
    <MenuItem value={10}>Trainee</MenuItem>
    <MenuItem value={20}>Trainer</MenuItem>
    <MenuItem value={30}>Expert</MenuItem>
    </Select>
    </FormControl>
    <FormControl sx={{ width: '39ch' }}>
    <OutlinedInput placeholder="Please enter text" value={employeeText} label="Text" onChange={(e)=> setEmployeeText(e.target.value)} />
    </FormControl>
    <Button type= "Submit" variant="contained" color="primary" onClick={handleSubmit}>Register</Button>
    <Button onClick={handleClose}>Cancel</Button>
    </Paper>
    </Grid>
    </Dialog>
        <h1>
          Registration Form Data 
      </h1>
      <div>
          {allentry.map((formdata) => {
                  return(
                    <div>
                      <p>{formdata.username}</p>
                      <p>{formdata.email}</p>
                      <p>{formdata.employeeGender}</p>
                      <p>{formdata.employeeRole}</p>
                      <p>{formdata.employeeText}</p>
                    </div>
                  )
          })}  
      </div>
        </div>
    )
}
export default ModalPage;