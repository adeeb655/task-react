import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Header } from "../module";
const LoginProfile = () =>{
    const location = useLocation();
    let LoginData = location.state;
    let navigator = useNavigate();
    return(
        <>
          <Header/>
        <h3>Username :{LoginData.users.name} </h3>
        <h3>password : {LoginData.users.password}</h3>
        </>
    )
}
export default LoginProfile;