import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CountryBodyProps } from "../../types/Types";

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://restcountries.com/v3.1'
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<[] | undefined, void>({  
      query: () => ({
        url: '/all'
      }),
      transformResponse: (response : []) =>
        response.sort((a, b) => {
          if (a['name']['common'] < b['name']['common']) {
            return -1;
        } else {
            return 1;
        };
      })
    }),
    getCountryByName: builder.query<CountryBodyProps, string> ({
      query: (name) => `name/${name}?fullText=true`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryByNameQuery } = countriesApi;
