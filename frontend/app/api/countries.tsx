import _ from 'lodash';
import { useQuery } from 'react-query';

import { API } from 'api/fetcher';

export interface RestCountry {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  flags: {
    png: string;
    svg: string;
  };
}

export interface Country {
  id: string;
  name: string;
  flag: string;
}

export const getCountries = async () => {
  return await API.get<RestCountry[]>('https://restcountries.com/v3.1/all');
};

export const useCountries = () =>
  useQuery('countries', async () => {
    const { data } = await getCountries();
    const countries: Country[] = data.map((country) => ({
      id: country.cca2,
      name: country.name.common,
      flag: country.flags.png,
    }));
    return _.sortBy(countries, 'name');
  });
