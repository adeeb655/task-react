import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AboutUsPage } from "./page/Index";
import {Login, Resgester} from "./componenets/Index"
// import {Dashboard} from "./page/index"
// import {Header} from "./modules/index"
// import {Basicform} from "./components/form/index"

const RouterPage =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/about" element={<AboutUsPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Resgester" element={<Resgester/>}/>

            

            {/* <Route path="/dasboard" element={<Dashboard/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/basicform" element={<Basicform/>}/> */}

            </Routes>
        </BrowserRouter>
        
    );
}
export default RouterPage;