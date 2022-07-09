import { Link } from "react-router-dom";

import './Card.scss'
import { BodydataProps } from "../../types/Types";
import { CountryListProps } from "../../types/Types";

const Card = ({ data }: BodydataProps) => {

    return (
        <>
        {data?.map((country : CountryListProps) => {
            const { flags, name, population, region, capital } = country

            return (
              <Link key={data.indexOf(country)} to={`/country/${name['common']}`}>
                <div className="card" >
                    <div className='flag'>
                        <img src={flags['svg']} alt="" />
                    </div>
                    <div className='infos'>
                        <div className='countryName'>{name['common']}</div>
                        <div className='countryDetails'>
                            <p className='population'>Population: <span>{population.toLocaleString('en')}</span> </p>
                            <p className='region'>Region: <span>{region}</span> </p>
                            <p className='capital'>Capital: <span>{capital}</span> </p>
                        </div>
                    </div>
                </div>
              </Link>
            )
        })}
        </>
)};

export default Card;