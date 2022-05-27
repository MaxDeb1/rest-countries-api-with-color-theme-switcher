import React from 'react';

import './DarkModeToggleSwitch.scss'
import { IoMoonOutline } from 'react-icons/io5';
import { IoMoonSharp } from 'react-icons/io5';

const DarkModeToggleSwitch = ({ on, toggle }) => {

  const props = {
    className: 'btn-toggle',
    type: 'button',
    role: 'switch',
    onClick: (typeof toggle === 'function') ? toggle : () => {},
    'aria-checked': (on = on === true)
  };

  return (
    <button {...props}>
      { on ? <IoMoonOutline /> : <IoMoonSharp /> }
      Dark Mode
    </button>
  )
}

export default DarkModeToggleSwitch;