import React, { useContext, useEffect } from 'react';
import Country from './Country';
import CountryContext from '../../context/country/CountryContext';

const Countries = () => {
  const countryContext = useContext(CountryContext);

  const { countries, loadCountries } = countryContext;

  useEffect(() => {
    loadCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="px-14 lg:px-40 grid gap-10 lg:gap-16 lg:grid-cols-4">
      {countries.map(({ alpha2Code: code, name, population, region, capital, flags }) => (
        <Country
          key={code}
          name={name}
          population={population}
          region={region}
          capital={capital}
          flag={flags}
        />
      ))}
    </section>
  );
};

export default Countries;
