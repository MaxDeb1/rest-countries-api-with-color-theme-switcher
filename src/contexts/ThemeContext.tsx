import { createContext, useEffect, useState } from 'react';

export type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode?: () => void;
}

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

const ThemeContextProvider = (props: any) => {
    const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches; 

    const [darkMode, setDarkMode] = useState(() => {
        const localTheme = localStorage.getItem('darkMode');
        return localTheme ? JSON.parse(localTheme) : isDarkMode;
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        const themeStatus = darkMode ? 'false' : 'true';
        localStorage.setItem("darkMode", themeStatus)
    };

    useEffect(() => {
        const query = window.matchMedia("(prefers-color-scheme: dark)");

        query.addEventListener("change", (event) => {
            setDarkMode(event.matches)
            localStorage.removeItem("darkMode")
        })
    }, [])

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            <div className={`theme--${darkMode ? "dark" : "light"}`}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;