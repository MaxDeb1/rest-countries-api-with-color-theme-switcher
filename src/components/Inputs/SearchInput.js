import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

import './SearchInput.scss'

const SearchInput = () => {
    return (
        <div className='search'>
            <AiOutlineSearch />
            <input type="text" placeholder='Search for a country…'/>
        </div>
    );
};

export default SearchInput;