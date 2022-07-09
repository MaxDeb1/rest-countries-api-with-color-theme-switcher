import React from 'react';

import './DarkModeToggleSwitch.scss'
import { IoMoonOutline } from 'react-icons/io5';
import { IoMoonSharp } from 'react-icons/io5';

interface ToggleSwitchProps {
  on: boolean,
  toggle: () => void
}

const DarkModeToggleSwitch = ({ on, toggle }: ToggleSwitchProps) => {

  const props = {
    className: 'btn-toggle',
    role: 'switch',
    onClick: (typeof toggle === 'function') ? toggle : () => {},
    'aria-checked': (on = on === true)
  };

  return (
    <button {...props} >
      { on ? <IoMoonSharp /> : <IoMoonOutline /> }
      Dark Mode
    </button>
  )
}

export default DarkModeToggleSwitch;