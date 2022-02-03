import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs, Contact, Login, LoginProfile, ModalPage, Signup, Loginup, EditUser } from "./page/Index";
import { PageError, PrivateRoute, PublicRoute} from "./components/Index";
import { Adduser,Edituser,User } from "./Crud/forms/index";
const Router = (props) =>{
    return(
        <>
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/modal" element={<ModalPage/>} />
          <Route path="/form" element={<Adduser/>} />
          <Route path="/edit" element={<Edituser/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/logindata" element={<LoginProfile />} />
            <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/aboutUs"  element={<AboutUs {...props} />} />
            <Route path="/" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/loginup" element={ <PublicRoute><Loginup /></PublicRoute>} />
            <Route path="*" element={<PageError/>}/>
        </Routes>
        </BrowserRouter>
        </>     
    )
}
export default Router;