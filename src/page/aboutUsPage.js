import React from 'react'
import {Header} from "../module";
import { HeaderPart,ImgPrs,TextPart } from '../components/styles';
const aboutUsPage =(props)=>{
    console.log("data in about us",props)
return(
    <div className="wrapper">
        <Header/>
         <HeaderPart>
           <ImgPrs>
           <img src="/Images/person.png" alt="image" width="250px"/>
           {/* <p>{props.data.eid}</p> */}
           </ImgPrs>
           <TextPart >
               hello
               {/* <h1>{props.data.name}</h1>
               <h5>{props.data.designation}</h5>
               <h6 >{props.data.worksAs}</h6>
               <h6>{props.data.admittedAt}</h6> */}
           </TextPart>
           </HeaderPart>
    </div>
)
}
export default aboutUsPage;