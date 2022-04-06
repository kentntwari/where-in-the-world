import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import Filter from '../filter/Filter';

const Search = () => {
  return (
    <div className="px-4 py-5 lg:px-40 lg:py-12 flex flex-col items-start gap-10 lg:flex-row lg: justify-between lg:items-center lg:gap-0">
      <SearchBar />
      <Filter />
    </div>
  );
};

export default Search;
