import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import SearchInput from '../../components/Inputs/SearchInput';
import Results from '../../components/Results/Results';

import './Countries.scss'

const Countries = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

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

    function search(countries) {
        if(region === null) {
            return countries.filter(countrie => countrie.name.common.toLowerCase().indexOf(query) > -1);
        }
        return countries.filter(countrie => countrie.name.common.toLowerCase().indexOf(query) > -1 && countrie.region.toLowerCase().indexOf(region) > -1);
    }

    useEffect(() => {
      const url = "https://restcountries.com/v3.1/all";

      const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            sortArrayByName(json);
            setData(json);
        } catch (error) {
            console.log("error", error);
        }
      };

      fetchData();
    }, [region]);

    function sortArrayByName(countriesData) {
        countriesData.sort(function (a, b) {
            if (a.name.common < b.name.common) {
                return -1;
            } else {
                return 1;
            };
        });
    }

    return (
        <main>
            <div className='top'>
                <SearchInput query={query} setQuery={setQuery} />
                <Filter region={region} option={option} />
            </div>
            <Results 
                countries={search(data)}
                region={region}
            />
        </main>
    );
};

export default Countries;