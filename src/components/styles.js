import { Button } from "@material-ui/core";
import styled, {StyleComponents} from "styled-components";

export const Heading = styled.h1`
color:Blue;  
`
export let HeaderPart = styled.header` 
background-color: rgb(99,110,160);
// background-color : green;
height: 350px;
position: relative;   
`
const Head = styled.div`
background-color:blue;
font-size:50px;
height:300px; 
`
export const UserName = styled.h1`
color : blue;
font-size : 25px;
margin-left: 400px;
`
export const ImgPrs = styled.div`
position: absolute;
top: 55px;
left: 145px;
width: 280px;
height : 360px;
border: 1px solid white;`

export const TextPart = styled.div`
margin-left: 440px;
padding-top: 110px;`

export const Ul = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
// background-color: rgb(161 157 164);
background-color: lightgreen;
height: 70px;
`
export const Li = styled.li`
list-style: none;
`
export const DashAnchor = styled.li`
text-decoration: none;
color: Green;
`
export const Btn = styled.button`
background-color: ${(props)=>props.color};
margin-left: 450px;
width : 110px;
height: 50px;
margin-top: 25px;
color : white;
 
`
 export const Cbutton = styled.button`
 background-color: black;
 color:white;
 width: 110px;
 height: 50px;
 margin-left: 450px;
 `
  export const InputField = styled.input`
  width: 30%;   
  margin: 15px ;  
  padding: 10px 10px;   
  display: block;   
  border: 2px solid grey;   
  box-sizing: border-box;   
  margin-left: 450px;
  margin-top: 20px;
  `
  export const Mylabel = styled.div`
  margin-left: 450px;
  color: black;
  `
  export const Stdh1 = styled.h1`
  margin-left: 450px;
  `
  export const Myp = styled.span`
  margin-left: 600px;
  font-size: 40px;
  border: 2px solid blue;
  `
  export const Counth1 = styled.span`
  margin-left: 550px;
  border: 2px solid blue;
  font-size: 50px;
  width: 30px;
  `
  export const Mydiv = styled.div`
  display: flex;
  flex-direction: column;
  // margin-left: 100px;
  align-Items: center;
  `
  export const Mytext = styled.div`
  color: blue;
  font-weight: bold;
  font-size: 20px;
  `
  export const Maindiv = styled.div`
  color: blue;
  display: flex;
  flex-direction: column;
  align-Items: center;
  padding-top: 20px;
  margin-top: 20px;
  `
  export const Firstname = styled.input`
  color: blue;
  padding-top: 30px;
  `