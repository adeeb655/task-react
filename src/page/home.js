import { useContext } from "react";
import { useLocation } from "react-router";
// import ThemeContext from "../contexts/themeContext";
import { Header } from "../module/index";
const Home =()=>{
const location = useLocation();
const myName =location.state
console.log(location)
// const themes= useContext(ThemeContext)
return(
<>
<div >
<Header/>
<h1>Home {myName} </h1>
</div>
</>
    )
}
export default Home;