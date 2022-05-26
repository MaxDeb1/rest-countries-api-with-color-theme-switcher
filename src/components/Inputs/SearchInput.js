import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

import './SearchInput.scss'


const SearchInput = ({query, setQuery}) => {
    return (
        <div className='search'>
            <AiOutlineSearch />
            <input type="text" placeholder='Search for a country…' value={query} onChange={(e) => {
                setQuery(e.target.value)
            }}/>
        </div>
    );
};

export default SearchInput;