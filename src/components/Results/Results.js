import React from 'react';
import Card from '../Card/Card';

import './Results.scss'

const Results = ({countries, region}) => {

    return (
        <section className='results'>
            <Card countries={countries} region={region} />
        </section>
    );
};

export default Results;