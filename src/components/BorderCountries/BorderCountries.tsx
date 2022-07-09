import "./BorderCountries.scss"
import { useGetCountriesQuery } from "../../redux/services/countries";
import Loading from "../Loader/LoadingBorderCountries";
import { BordersProps } from "../../types/Types";
import { CountryListProps } from "../../types/Types";
import { BorderCountriesProps } from "../../types/Types";

const BorderCountries = (borders: BordersProps) => {
    const { 
        data,
        isLoading, 
        isSuccess,
        isError, 
        error
    } = useGetCountriesQuery();

    function getBorderCountries(countries: []) {
        let borderCountries: string[] = [];
        for (var i = 0; i<Object.values(borders)[0].length; i++) {
            let borderCountriesData: BorderCountriesProps[] = countries.filter((country: CountryListProps) => country.cca3.indexOf(Object.values(borders)[0][i]) > -1);
            borderCountries.push(borderCountriesData[0].name.common)
        }
        return borderCountries;
    }

    if (isError) {
        return <div>{error.toString()}</div>;
    } if (isLoading) {
        return <Loading />
    } else if (isSuccess) {
        return (
            <div className="borderCountriesComponent">
                Border Countries:
                <div className="borderCountries">
                    {borders.borders !== undefined
                        ? getBorderCountries(data).map(
                            (border, index) => (
                                <div key={index} className="borderCountrie">
                                {border}
                                </div>
                            )
                        )
                    : "No border countries"}
                </div>
            </div>
        );
    };
    return null;
};

export default BorderCountries;