import React from 'react';
/* import { Link } from "react-router-dom"; */

import './Header.scss'
import ThemeBtn from '../Buttons/ThemeBtn';

const Header = () => {
    return (
        <header>
            <h1>Where in the world?</h1>
            <ThemeBtn />

{/*             <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="country">Country</Link>
            </nav> */}
        </header>
    );
};

export default Header;