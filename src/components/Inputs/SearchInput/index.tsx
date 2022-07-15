import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { handleSearch, selectSearch } from "../../../redux/features/searchSlice";

import './style.scss'


const SearchInput = () => {
    const query = useSelector(selectSearch)
    const dispatch = useDispatch()
    console.log(query)

    return (
        <div className='search'>
            <AiOutlineSearch />
            <input 
                type="text" 
                placeholder='Search for a country…' 
                value={query} 
                onChange={(e) => 
                dispatch(handleSearch(e.target.value))
            }/>
        </div>
    );
};

export default SearchInput;