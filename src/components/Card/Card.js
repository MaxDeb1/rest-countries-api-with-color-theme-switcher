import React from 'react';
import { Link } from "react-router-dom";

import './Card.scss'

const Card = ({countries, region}) => {
    return (
        <>
        {countries.map((country) => {
            const { flags, name, population, region, capital } = country

            return (
              <Link to="country">
                <div key={countries.indexOf(country)} className="card" >
                    <div className='flag'>
                        <img src={flags.svg} alt="" />
                    </div>
                    <div className='infos'>
                        <div className='countryName'>{name.common}</div>
                        <div className='countryDetails'>
                            <p className='population'>Population: <span>{population.toLocaleString('en')}</span> </p>
                            <p className='region'>Region: <span>{region}</span> </p>
                            <p className='capital'>Capital: <span>{capital}</span> </p>
                        </div>
                    </div>
                </div>
              </Link>
            )
        })}
        </>
)};

export default Card;