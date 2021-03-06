import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

import './style.scss'

const BtnBack = () => {
    let navigate = useNavigate();
    return (
        <button className='btn-back' onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack />
            Back
        </button>
    );
};

export default BtnBack;