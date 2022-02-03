import React from 'react'
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/styles";
import { Header } from "../module/index";
import { Adduser} from "../components/Index";
import AllUsers from "../api/users";

const Dashboard =()=>{
    const location = useLocation();
    const myName =location.state
    console.log(location)
    const navigation = useNavigate();
    return(
        <>
        <Header/>
        <Heading><marquee>Welcome to dashboard</marquee></Heading>
        <Adduser/>
        <AllUsers/>
        {/* <Get/> */}
        {/* <Button  ButtonText= "click the Button" Buttonclass="variant"/>
        {/* <Counter/>
        <CounterTime/>   */}
        </>
    )
}
export default Dashboard;