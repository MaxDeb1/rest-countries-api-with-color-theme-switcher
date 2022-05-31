import React, { useCallback, useEffect, useRef, useState} from 'react';

import './Filter.scss';

const Filter = ({region, option}) => {
    const node = useRef();
    const [open, setOpen]= useState(false);

    const handleClick = useCallback(() => {
        setOpen(!open)
    }, [open])

    const close = (e) => {
        if(node.current.contains(e.target)) {
            return;
        }
        setOpen(false)
    }

    useEffect(() => {
        document.addEventListener("click", close);
        return () => {
            document.removeEventListener("click", close);
        }
    }, [open]);

    return (
        <div className='dropdown'>
            <div className='control' onClick={handleClick} ref={node} >
                <div className='selected-value' >
                    {region ? region : "Filter by Region"}
                </div>
                <div className={`arrow ${open ? "open" : null}`} />
            </div>
            <div className={`options ${open ? "open" : null}`} >
                {option}
            </div>
        </div>
    );
};

export default Filter;