import { useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

import './Header.scss'
import DarkModeToggleSwitch from '../Buttons/DarkModeToggleSwitch';

const Header = () => {

    const [dark, toggleDarkMode] = useContext(ThemeContext);

    return (
        <header>
            <h1>Where in the world?</h1>
            <DarkModeToggleSwitch on={dark} toggle={toggleDarkMode}/>
        </header>
    );
};

export default Header;