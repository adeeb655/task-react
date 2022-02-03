import React from 'react'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { Ul,Li } from "../components/styles";
import ThemeContext from "../page/themecontext"
// import {useNavigate} from "react-router";
// import { ThemeContext } from "@mui/styled-engine";

const Header = () =>{    
const removeSession=()=>{
    localStorage.removeItem("getToken")
}
const themes = useContext(ThemeContext);
    return(
        <div style={themes.theme}>
            <Ul>   
                <Li><Link to="/Dashboard">Dashboard</Link></Li>
                <Li><Link to="/Contact" >Contact</Link></Li>
                <Li><Link to="/aboutUs">About us</Link></Li>
                <Li><Link to="/modal">Modal</Link></Li>
                <Li><Link to="/" onClick={removeSession} >Logout</Link></Li>
            </Ul>
        </div>
    )
}
export default Header;