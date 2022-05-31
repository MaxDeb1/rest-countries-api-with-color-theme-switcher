import React, { useParams } from 'react';
import BtnBack from '../../components/Buttons/BtnBack';

import './Country.scss'

const Country = ({country}) => {
    

    return (
        <div className='country'>
            <BtnBack />
            <section className='container'>
                <div className='flag'>
                    <img src="flags.svg" alt="" />
                </div>
                <div className='dataCountry'>
                    <div className='countryName'>"name.common"</div>
                    <div className='countryDetails firstChunk'>
                        <p className='native'>Native Name: <span>"name.nativeName.common"</span></p>
                        <p className='population'>Population: <span>"population.toLocaleString('en')"</span></p>
                        <p className='region'>Region: <span>"region"</span></p>
                        <p className='sebRegion'>Sub Region: <span>"subregion"</span></p>
                        <p className='capital'>Capital: <span>"capital"</span></p>
                    </div>
                    <div className='countryDetails secondChunk'>
                        <p className='domain'>Top Level Domain: <span>"tld"</span></p>
                        <p className='currencies'>Currencies: <span>"currencies.name"</span></p>
                        <p className='languages'>Languages: <span>"languages"</span></p>
                    </div>

                        <div className='borderCountries'>Border Countries:
                            <div className='borderCountrie'>
                                "border.name.common"
                            </div>
                        </div>

                </div>
            </section>
        </div>
    );
};

export default Country;