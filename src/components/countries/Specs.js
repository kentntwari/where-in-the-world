import React from 'react';

const Specs = ({ name, population, region, capital }) => {
  return (
    <div className="details pl-6 pt-7 pb-8 flex flex-col gap-6">
      <h2 className="lg:text-countryXL font-bold">{name}</h2>
      <div className="specs flex flex-col gap-3">
        <p className="text-hm font-light">
          <span className="text-hm font-normal">Population: </span>
          {population}
        </p>

        <p className="text-hm font-light">
          <span className="lg:text-hm font-normal">Region: </span>
          {region}
        </p>

        <p className="text-hm font-light">
          <span className="lg:text-hm font-normal">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Specs;
