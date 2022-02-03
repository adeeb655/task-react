import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { InputField, Mylabel, Stdh1, Cbutton } from '../components/styles';
import { Header } from "../module";
const LoginPage =()=>{
const [users,setUsers] =useState(
{
 name: "",
 Password:"",
}
)
let navigate = useNavigate();
const HandleChange =(e) =>{
setUsers({
 ...users,
[e.target.name]:e.target.value,
[e.target.Password]:e.target.value,
})
console.log("usets", users);
}
 let data = users;
    const redirectHandler =() =>{
    navigate('/logindata',{state: {users}})
    }
    return(
        <>
        <Header/>
             <div>
            <Stdh1> Student Login Form </Stdh1>
             <Mylabel>Username:</Mylabel>
             <InputField type="text" name="name" placeholder="Enter Username" onChange={HandleChange}/>  
             <Mylabel>Password:</Mylabel> 
             <InputField type="password" name="password" placeholder="Enter Password" onChange={HandleChange}  />  
             <Cbutton onClick={redirectHandler}> Submit</Cbutton>
         </div>
        </>
    )
}
export default LoginPage;