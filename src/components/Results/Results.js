import React from 'react';
import Card from '../Card/Card';

import './Results.scss'

const Results = ({countries}) => {

    return (
        <section className='results'>
            <Card countries={countries} />
        </section>
    );
};

export default Results;