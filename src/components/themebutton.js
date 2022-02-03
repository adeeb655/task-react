
  
import {useContext} from "react";
import ThemeContext, { themes } from "../page/themecontext";
const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
    theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    }
    return (
        <>
            <button onClick={toggleTheme}>Theme Changer</button>
        </>
    )
}
export default ThemeButton;