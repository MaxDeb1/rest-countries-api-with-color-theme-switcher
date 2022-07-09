export interface BodydataProps {
    data: CountryListProps[];
}

export interface CountryListProps {
    flags: {
        svg: string;
      };
    name: {
      common: string;
    };
    population: number;
    toLocaleString: string;
    region: string;
    capital: string;
    cca3: string;
}

export interface CountryDetailProps {
    flags: {
        svg: string;
      };
    name: {
      common: string;
      nativeName: {
        [index: string]: {
          common: string;
        }
      }
    };
    population: number;
    toLocaleString: string;
    region: string;
    subregion: string;
    capital: string;
    tld: string;
    currencies: CurrenciesProps;
    languages: {
      [key: string]: string;
    };
    borders?: string[]; //ou comme languages ,
}

export interface CurrenciesProps {
  [key: string]: {
    name: string;
  };
}

export interface CountryBodyProps {
    [key: number]: CountryDetailProps;
    countryDetail: CountryDetailProps;
}

export interface BordersProps {
  borders?: string[];
}

export interface BorderCountriesProps {
  name: {
    common: string;
  };
}