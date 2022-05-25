import React from 'react';

import './Card.scss'

const Card = ({datas}) => {
    return (
        <div className="card">
        <div className='flag'></div>
        <div className='countryName'></div>
        <div className='countryDetails'>
            <p className='population'></p>
            <p className='region'></p>
            <p className='capital'></p>
        </div>
    </div>
)};

export default Card;

/* 
{datas.map((data) => (
    <div
        key={datas.indexOf(data)}
        className="card"
    >
        <div className='flag'></div>
        <div className='countryName'>{data[0].name}</div>
        <div className='countryDetails'>
            <p className='population'></p>
            <p className='region'></p>
            <p className='capital'></p>
        </div>
    </div>
))} 
*/