import React from 'react';
import Card from '../Card/Card';

const Results = ({datas, loading, error}) => {
    return (
        <section>
            <Card datas={datas} />
        </section>
    );
};

export default Results;