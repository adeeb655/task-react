
  
import React , {useState, useEffect} from "react";
import useTitle from "./useTitle";
const Hooks =()=>{
    const [count, setCount]=useState(0)
    useTitle(count)
    useEffect(()=>{
        document.title=count + "hits on button"
    })
    return (
        <>
        <h1>Custom Hook</h1>
        <button onClick={()=> setCount(count+1)}>clicks</button>
        </>
    );
};
export default Hooks;