import React, { useReducer, useMemo } from 'react';
import axios from 'axios';
import CountryContext from './CountryContext';
import CountryReducer from './CountryReducer';

import {
  LOAD_COUNTRIES,
  LOAD_COUNTRY,
  SEARCH_COUNTRIES,
  LOAD_REGION,
  GET_REGION,
} from '../types';

const CountryState = (props) => {
  const initialState = {
    countries: [],
    country: [],
    region: 'Filter by region',
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const getAllCountries = useMemo(async () => {
    const res = await axios.get(`https://restcountries.com/v2/all`);

    return res.data;
  }, []);

  // initialize countries
  function loadCountries() {
    getAllCountries.then((data) => dispatch({ type: LOAD_COUNTRIES, payload: data }));
  }

  async function loadCountry(country) {
    const res = await axios.get(`https://restcountries.com/v2/name/${country}`);

    dispatch({ type: LOAD_COUNTRY, payload: res.data[0] });
  }

  // search countries
  async function searchCountries(country) {
    if (country === '' || country === null) return loadCountries();

    const res = await axios.get(`https://restcountries.com/v2/name/${country}`);

    dispatch({ type: SEARCH_COUNTRIES, payload: res.data });
  }

  async function getRegion(element) {
    if (element !== undefined && typeof element === 'string') {
      getAllCountries.then((data) => {
        const countriesByRegion = data.filter(({ region }) => region === element);

        dispatch({ type: GET_REGION, payload: countriesByRegion });
      });
    }
  }

  function displaySelectedRegion(element) {
    return dispatch({ type: LOAD_REGION, payload: element });
  }

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        region: state.region,
        loadCountries,
        searchCountries,
        getRegion,
        displaySelectedRegion,
        loadCountry,
      }}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
