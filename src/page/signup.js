import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate} from "react-router";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Validation  } from '../components/Index';
import ThemeContext from "./themecontext";
import ThemeButton from "../components/themebutton";

const Signup=()=>{
const [values, setValues]= useState({
  name: '',
  email: '',
  password: '',
});
const [errors, setErrors] = useState({ name: '', email: '', password:'',});
const handleBlur=()=>{
  console.log("signup ");
  setErrors(Validation(values));
}
const themes=useContext(ThemeContext);
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    if(!errors.email&&!errors.password&&!errors.name){
    const data = values;
// getItem function use to retrieve data from LocalStorage
    let signupData = localStorage.getItem('registerData');
    if(signupData==null){
      signupData=[]
      signupData.push(data);
      localStorage.setItem('registerData',JSON.stringify(signupData))
    }else{
      let newDetail = JSON.parse(signupData)
      newDetail.push(data)
      e.preventDefault();
      localStorage.setItem("registerData",JSON.stringify(newDetail))   
    };
    const message = "Signup Successfully";
    navigator('/loginup',{state:message})
    }
  }
  const paperStyle={padding: "10px 20px", width:350, margin:"0px auto"}
  return (
 <>
<Paper elevation={20} style={paperStyle}  style={themes.theme} >
      <Container component="main" maxWidth="xs" onSubmit={handleSubmit}  >
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField sx={{backgroundColor: 'lightgrey'}}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={(e)=>{
                setValues({
                  name: e.target.value,
                  email:values.email,
                  password: values.password
                })}}
              autoComplete="name"
              autoFocus/>
               {errors.name && <p className="error">{errors.name}</p>}
            <TextField sx={{backgroundColor: 'lightgrey'}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={(e)=>{
                setValues({
                  name:values.name,
                  email: e.target.value,
                  password: values.password
                })}} 
              autoComplete="email"
              autoFocus
            />
             {errors.email && <p className="error">{errors.email}</p>}
            <TextField sx={{backgroundColor: 'lightgrey'}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={(e)=>{
                setValues({
                  name:values.name,
                  email:values.email,
                  password: e.target.value,
                })}}
              autoComplete="current-password"/>
               {errors.password && <p className="error">{errors.password}</p>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit} 
              sx={{ mt: 3, mb: 2 }} >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      </Paper>                            
</> 
  );
}
export default Signup;