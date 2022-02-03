import { useEffect } from "react";
const useTitle =(props)=>{
    useEffect(() =>{
document.title=props + "press on button"
    })
};
export default useTitle;