import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Validation  } from '../components/Index';

const Loginup=(props)=>{
const [email,setEmail] =useState();
const [values, setValues] = useState({
email: "",
password: "",
  })
  const [errors,setErrors]=useState({});
  const navigator = useNavigate();
  const loc = useLocation();
  const message = loc.state;
  const handleBlur=()=>{
    console.log(" blurmesg")
    setErrors(Validation(values));
  }
  const registerData = localStorage.getItem("registerData")
  console.log("get",registerData)
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errors.email&& !errors.password) {
        console.log("in if",errors.email)
      const Datatoken = "abc"
      localStorage.setItem("getToken",Datatoken);
      if(Datatoken){
      navigator('/dashboard')
      }else{
        navigator('/')
      }
    } else {
      console.log("error")
    }
    };
    const onEmailChange = (e) => {
      setValues({
        email: e.target.value,
        password: values.password
      })
    }
    const onPasswordChange = (e) => {
      setValues({
        email: values.email,
        password: e.target.value
      })
    }
  const paperStyle={padding: "10px 20px", width:350, margin:"0px auto"}
  return (
 <>
<Paper elevation={20} style={paperStyle} >
      <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      <h1>{message}</h1>
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }} > 
          <Avatar sx={{ m: 2, bgcolor: 'blue' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
           Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={onEmailChange}
              autoComplete="email"
              autoFocus/>
                {errors.email && <p>{errors.email}</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={onPasswordChange}
              id="password"
              autoComplete="current-password"/>
                {errors.password && <p>{errors.password}</p>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
              >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box> 
      </Container>
      </Paper>
</> 
  );  
}
export default Loginup;