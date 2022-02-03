import React from "react";
import {UserName} from "../components/styles";
import { Header } from "../module";
import  {Hello, Demo} from "../components";
import {Selfcounter} from "../components";
const Contact =()=>{
return(
 <>
<Header/>
<Hello/>
<UserName>Counter with self-initiating and stop at 20 </UserName>
<Selfcounter/>
<Demo text="hello props"/>
<Demo/>
</>
)   
}
export default Contact;