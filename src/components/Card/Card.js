import React from 'react';

import './Card.scss'

const Card = ({countries}) => {
    return (
        <>
        {countries.map((country) => {
            const { flags, name, population, region, capital } = country

            return (
                <div key={countries.indexOf(country)} className="card">
                    <div className='flag'>
                        <img src={flags.svg} alt="" />
                    </div>
                    <div className='infos'>
                        <div className='countryName'>{name.official}</div>
                        <div className='countryDetails'>
                            <p className='population'>Population: <span>{population}</span> </p>
                            <p className='region'>Region: <span>{region}</span> </p>
                            <p className='capital'>Capital: <span>{capital}</span> </p>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
)};

export default Card;