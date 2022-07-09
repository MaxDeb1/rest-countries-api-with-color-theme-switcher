import React, { createContext, useState, useCallback } from 'react';
import useColorScheme from '../hooks/useColorScheme';
import { DarkMode } from '../theme';

type createContextType = [
  dark: boolean,
  toggleDarkMode: () => void
];

// @ts-ignore
export const ThemeContext = createContext<createContextType>([]);

const ThemeContextProvider = (props: any) =>  {
  const scheme = useColorScheme();
  const [ dark, setDark ] = useState(DarkMode.getSetting);

  const toggleDarkMode = useCallback(function () {
    setDark(prevState => {
      const newState = !prevState;
      DarkMode.updateSetting(newState);
      return newState;
    });
  }, []);

  return (
    <ThemeContext.Provider value={[dark, toggleDarkMode]}>
        <div className={`theme--${(scheme !== dark) ? "dark" : "light"}`}>
            {props.children}
        </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;