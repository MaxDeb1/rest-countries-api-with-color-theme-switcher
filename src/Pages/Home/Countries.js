import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import SearchInput from '../../components/Inputs/SearchInput';
import Results from '../../components/Results/Results';

import './Countries.scss'

const Countries = () => {

    const [data, setData] = useState([]);

    const [region, setRegion] = useState(null);
    const options = ["africa", "america", "asia", "europe", "oceania"];
    const option = options.map((option) => (
        <div
            key={options.indexOf(option)}
            className={`option ${region === option ? "selected" : null}`}
            onClick={() => {setRegion(option)} }
        >
        {option}
        </div>
    ));

    useEffect(() => {
      const url = "https://restcountries.com/v3.1/all";

      const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log("error", error);
        }
      };

      fetchData();
    }, []);

    return (
        <main>
            <div className='top'>
                <SearchInput />
                <Filter region={region} option={option} />
            </div>
            <Results 
                countries={data}
            />
        </main>
    );
};

export default Countries;