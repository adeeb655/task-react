import React from "react";
import { Navigate, Route, Routes } from "react-router";
const PrivateRoute =({children})=>{
    let token = localStorage.getItem('registerData');
    console.log("token is",token)     
    return  token?children:<Navigate to="/"/>  
}
export default PrivateRoute;