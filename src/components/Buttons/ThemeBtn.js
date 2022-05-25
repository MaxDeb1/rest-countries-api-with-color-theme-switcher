import React, { useContext } from 'react';

import './ThemeBtn.scss'
import { IoMoonOutline } from 'react-icons/io5';
import { IoMoonSharp } from 'react-icons/io5';
import { ThemeContext } from "../Contexts/ThemeContext";


const ThemeBtn = () => {
  
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <button className='btn-toggle' onClick={toggleTheme}>
      {theme ? <IoMoonSharp /> : <IoMoonOutline />}
      Dark Mode
    </button>
  );
};

export default ThemeBtn;