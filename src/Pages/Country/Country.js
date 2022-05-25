import React from 'react';
import BtnBack from '../../components/Buttons/BtnBack';


const Country = () => {
    return (
        <div className='country'>
            <BtnBack />
            <section>
                <div className='flag'></div>
                <div className='dataCountry'>
                    <div className='countryName'></div>
                    <div className='countryDetails'>
                        <p className='native'>Native Name: </p>
                        <p className='population'>Population: </p>
                        <p className='region'>Region: </p>
                        <p className='sebRegion'>Sub Region: </p>
                        <p className='capital'>Capital: </p>
                        <p className='domain'>Top Level Domain: </p>
                        <p className='currencies'>Currencies: </p>
                        <p className='languages'>Languages: </p>
                    </div>
                    <div className='borderCountries'>
                        <div className='borderCountrie'></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Country;