import React, { useRef, useContext } from 'react';
import CountryContext from '../../context/country/CountryContext';

const Filter = () => {
  function toggleDropdown() {
    if (dropdown.current.hasAttribute('class')) {
      dropdown.current.removeAttribute('class');
    } else {
      dropdown.current.setAttribute('class', 'hidden');
    }

    // toggle arrow
    arrow.current.classList.toggle('rotate-180');
    arrow.current.classList.add('transition', 'duration-200');
  }

  // continents
  let regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  // target dropdown
  const dropdown = useRef();

  // target arrow
  const arrow = useRef();

  // define context
  const countryContext = useContext(CountryContext);

  const { region, displaySelectedRegion, getRegion } = countryContext;

  const selectedRegion = (element) => {
    if (element) return displaySelectedRegion(element);
  };

  const displayRegion = (element) => {
    if (element) return getRegion(element);
  };

  return (
    <div className="filter relative">
      <div
        onClick={toggleDropdown}
        className=" bg-white px-6 py-3.5 lg:p-5 rounded-md text-sm lg:text-hm 
        font-normal flex justify-between items-center gap-12 filter drop-shadow">
        <p>{region}</p>
        <i ref={arrow} className="fas fa-chevron-down transform rotate-180"></i>
      </div>

      <div ref={dropdown} className="hidden">
        <ul
          className="list-none bg-white filter drop-shadow m-0 p-4 lg:p-5 rounded-md font-normal 
        absolute left-0 top-12 lg:top-16 z-10 w-full flex flex-col  items-start lg:items-center
        lg:justify-items-center gap-4">
          {regions.map((region) => (
            <li
              onClick={() => {
                selectedRegion(region);
                displayRegion(region);
              }}
              key={regions.indexOf(region)}
              className="continent text-sm lg:text-hm">
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
