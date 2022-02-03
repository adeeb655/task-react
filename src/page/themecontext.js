import React from "react";
export const themes ={
    dark:{
        color:'white',
        background:'pink',    
    },
    light:{
        color:'black',
        background:'white',
    }
}
const ThemeContext = React.createContext(themes.dark);
export default ThemeContext