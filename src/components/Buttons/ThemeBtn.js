import React, { useContext } from 'react';

import './ThemeBtn.scss'
import { IoMoonOutline } from 'react-icons/io5';
import { ThemeContext } from "../Contexts/ThemeContext";


const ThemeBtn = () => {
  
  const [toggleTheme] = useContext(ThemeContext);

  return (
    <button className='btn-toggle' onClick={toggleTheme}>
      <IoMoonOutline />
      Dark Mode
    </button>
  );
};

export default ThemeBtn;