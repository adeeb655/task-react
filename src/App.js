import { useState } from "react";
import Router from './Router';
import ThemeContext,{themes} from "./page/themecontext";
function Apps() {
  const [theme,setTheme]=useState(themes.dark);
  const value= {theme,setTheme}
  const aboutDetail = {
    name:"Fotis Karayannopoulos",
    eid:"f_karayannopoulops@klclawfirm.com",
    designation:"SENIOR ASSOCIATE",
    worksAs:"SUPREME COURT LAWYER",
    admittedAt:"Admitted ti Athens Bar in 1992",
    heading: "Student Login Form"  
   }
  return (
    <>
      <ThemeContext.Provider value={value} >
      {/* <Router/> */}
      <Router persondata= {aboutDetail} />
      </ThemeContext.Provider>
    </>
  );
}
export default Apps;