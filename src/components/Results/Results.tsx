import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { selectRegion } from "../../redux/features/regionSlice";
import { selectSearch } from "../../redux/features/searchSlice";

import './Results.scss'
import { CountryDetailProps } from "../../types/Types";
import { useGetCountriesQuery } from "../../redux/services/countries";
import Loading from "../Loader/LoadingHome";

const Results = () => {
    const { 
        data,
        isLoading, 
        isSuccess, 
        isError, 
        error
    } = useGetCountriesQuery();

    const region = useSelector(selectRegion)
      console.log(region)
    const query = useSelector(selectSearch)
    console.log(query)


    function search(countries: []) {
        if(region === "") {
            return countries.filter((country : CountryDetailProps) => country.name.common.toLowerCase().indexOf(query) > -1);
        }
        return countries.filter((country : CountryDetailProps) => country.name.common.toLowerCase().indexOf(query) > -1 && country.region.indexOf(region) > -1);
    }
    
    let content

    if (isLoading) {
        content = <Loading />
    } else if (isSuccess) {
        content = <Card data={search(data)}/>
    } else if (isError) {
        content = <div>{error.toString()}</div>;
    }

    return (
        <section className='results'>
            {content}
        </section>
    );
};

export default Results;