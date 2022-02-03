import { Navigate } from "react-router";
const PublicRoute =({children})=>{
    let token = localStorage.getItem('getToken');
    console.log("token is",token)
    return token? <Navigate to="/dashboard"/>:children;
}
export default PublicRoute;