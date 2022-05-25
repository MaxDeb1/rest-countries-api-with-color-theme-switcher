import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import SearchInput from '../../components/Inputs/SearchInput';
import Results from '../../components/Results/Results';

import './Home.scss'

const Home = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
        const getData = async () => {
          try {
            const response = await fetch(
              `https://restcountries.com/v3.1/all`
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            setData(actualData);
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }  
        }
        getData()
    }, [])

    return (
        <main>
            <div className='top'>
                <SearchInput />
                <Filter region={region} option={option} />
            </div>
            <Results 
                datas={data}
                loading={loading}
                error={error}
            />
        </main>
    );
};

export default Home;