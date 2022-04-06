import {
  LOAD_COUNTRIES,
  LOAD_COUNTRY,
  SEARCH_COUNTRIES,
  LOAD_REGION,
  GET_REGION,
} from '../types';

const CountryReducer = (state, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return { ...state, countries: action.payload };

    case LOAD_COUNTRY:
      return { ...state, country: action.payload };

    case SEARCH_COUNTRIES:
      return { ...state, countries: action.payload };

    case LOAD_REGION:
      return {
        ...state,
        region: action.payload,
      };

    case GET_REGION:
      return { ...state, countries: action.payload };

    default:
      throw new Error();
  }
};

export default CountryReducer;
