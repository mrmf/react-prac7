import React, {useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
const [theme, setTheme] = useState("black");

return (
    <ThemeContext.Provider value={[theme, setTheme]}>
        {props.children}
    </ThemeContext.Provider>
)
}