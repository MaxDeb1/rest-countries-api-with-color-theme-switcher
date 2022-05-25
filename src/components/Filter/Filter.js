import React, { useEffect, useRef, useState} from 'react';

import './Filter.scss';

const Filter = ({region, option}) => {
    const [open, setOpen]= useState(false);
    const ref = useRef(null);

/*     const handleClick = useCallback(() => {
        setOpen((prev) => !prev)
    }, []) */

    useEffect(() => {
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, []);

    function close(e) {
        setOpen(e && e.target === ref.current);
    }

    return (
        <div className='dropdown'>
            <div className='control' onClick={() => setOpen((prev) => !prev)}>
                <div className='selected-value' ref={ref}>
                    {region ? region : "Filter by Region"}
                </div>
                <div className={`arrow ${open ? "open" : null}`}/>
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {option}
            </div>
        </div>
    );
};

export default Filter;