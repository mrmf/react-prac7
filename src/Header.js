import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
export function Header() {
const [appTheme, setAppTheme] = useContext(ThemeContext);
    const handleTheme = () => {

        appTheme=== "Light" ?
        setAppTheme ("dark")
        : setAppTheme("Light")
    } 
    return (
        <header>
            <h1>Hello</h1>
            <button> change Theme</button>
        </header>
    )
}

export default Header
