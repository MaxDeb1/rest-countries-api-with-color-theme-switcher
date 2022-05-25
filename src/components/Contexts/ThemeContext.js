import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        setTheme((s) => !s);
    };
    console.log(theme);

    return (
        <ThemeContext.Provider value={[toggleTheme]}>
            <div className={`theme--${theme ? "dark" : "light"}`}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;