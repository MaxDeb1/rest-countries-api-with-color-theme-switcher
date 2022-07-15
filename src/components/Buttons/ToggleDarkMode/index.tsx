import { useContext } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { IoMoonSharp } from 'react-icons/io5';
import { ThemeContext } from "../../../contexts/ThemeContext"
import './style.scss'

const ToggleDarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDarkMode!();
  };

  return (
    <button className='btn-toggle' onClick={handleOnClick}>
      { darkMode ? <IoMoonSharp /> : <IoMoonOutline /> }
      Dark Mode
    </button>
  );
};

export default ToggleDarkMode;