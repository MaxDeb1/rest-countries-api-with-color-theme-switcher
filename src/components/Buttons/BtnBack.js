import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";


const BtnBack = () => {
    let history = useNavigate();
    return (
        <button className='btn-back' onClick={() => history.goBack()}>
            <IoIosArrowRoundBack />
            Back
        </button>
    );
};

export default BtnBack;