import BtnBack from "../../components/Buttons/BtnBack";
import { useParams } from "react-router-dom";

import "./style.scss";
import { useGetCountryByNameQuery } from "../../redux/services/countries";
import Loading from "../../components/Loader/LoadingCountry";
import BorderCountries from "../../components/BorderCountries/BorderCountries";

const Country = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useGetCountryByNameQuery(name!);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <p>Oh no, there was an error</p>;
  } else if (data) {
    const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = data[0]
    const native = name.nativeName;

    const sortCountryLanguagesInAlphabeticalOrder = (languages: { [key: string]: string }) => {
      let newLanguagesArray: string[] = [];
      for (let item in languages) {
        newLanguagesArray.push(languages[item]);
      }
      return (
        newLanguagesArray.sort((a, b) => {
          if (a < b) {
            return -1;
        } else {
            return 1;
        };
        })
      )
    };

    return (
        <div className="country">
          <BtnBack />
          <section className="container">
            <div className="flag">
              <img src={flags.svg} alt="" />
            </div>
            <div className="dataCountry">
              <div className="countryName">{name.common}</div>
              <div className="countryDetails firstChunk">
                <p className="native">
                  Native Name: <span>{Object.values(native)[Object.keys(native).length - 1].common}</span>
                </p>
                <p className="population">
                  Population: <span>{population.toLocaleString("en")}</span>
                </p>
                <p className="region">
                  Region: <span>{region}</span>
                </p>
                <p className="sebRegion">
                  Sub Region: <span>{subregion}</span>
                </p>
                <p className="capital">
                  Capital: <span>{capital}</span>
                </p>
              </div>
              <div className="countryDetails secondChunk">
                <p className="domain">
                  Top Level Domain: <span>{tld}</span>
                </p>
                <p className="currencies">
                  Currencies: <span>{Object.values(currencies)[0].name}</span>
                </p>
                <p className="languages">
                  Languages: {languages 
                     ? sortCountryLanguagesInAlphabeticalOrder(languages).map(
                        (language, index) => (
                          <span key={index}>
                            {(index ? ', ' : '') + language}
                          </span>
                        )
                      )
                    : "None Languages"}
                </p>
              </div>
              <BorderCountries borders={borders}/>
            </div>
          </section>
        </div>
    );
  } return null;
};

export default Country;
