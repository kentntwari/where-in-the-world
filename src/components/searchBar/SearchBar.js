import React, { useContext } from 'react';
import CountryContext from '../../context/country/CountryContext';

const SearchBar = () => {
  const countryContext = useContext(CountryContext);

  const { searchCountries } = countryContext;

  return (
    <form className=" bg-white w-full lg:w-2/6 px-7 py-3 rounded-md filter drop-shadow flex items-center gap-6 ">
      <i className="fas fa-search"></i>
      <input
        type="text"
        name="search"
        id="search-country"
        placeholder="Search for a country"
        className="w-11/12 text-sm lg:text-hm text-gray-150 bg-transparent outline-none"
        onChange={(e) => searchCountries(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
