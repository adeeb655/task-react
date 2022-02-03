import React from 'react'
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormGroup, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../api/get';
import Dialog from '@mui/material/Dialog';
const initialValue = {
name: '',
username: '',
email: '',
phone: ''
}
const useStyles = makeStyles({
container: {
width: '500px',
margin: '5% 0 40 1%',
'& > *': {
marginTop: 20
}
}
})
const Adduser = () => {
const [user, setUser] = useState(initialValue);
const { name, username, email, phone } = user;
const classes = useStyles();
let navigator = useNavigate();
const onValueChange = (e) => {
console.log(e.target.value);
setUser({...user, [e.target.name]: e.target.value})
}
const addUserDetails = async(e) => {
  setOpen(false);
await addUser(user);
navigator('/');
}
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
return (
  <div>
       <Button  variant="contained" color="primary"  onClick={handleClickOpen}>
      ADD USER +
      </Button>
      <Dialog  open={open} onClose={handleClose}>
<FormGroup className={classes.container}>
<Typography variant="h4">Add User</Typography>
<InputLabel htmlFor="my-input">Name</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
<InputLabel htmlFor="my-input">Username</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
<InputLabel htmlFor="my-input">Email</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
<InputLabel htmlFor="my-input">Phone</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
<Button variant="contained" disabled={!name || !username || !email || !phone} color="primary"  style={{margin:10}} onClick={() => addUserDetails()}>Add User</Button>
<Button color="secondary" variant="contained" style={{margin:10}} onClick={handleClose}>Cancel</Button>
</FormGroup>
</Dialog>
</div>
)
}
export default Adduser;