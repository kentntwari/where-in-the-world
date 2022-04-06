import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CountryContext from '../../context/country/CountryContext';

const AboutCountry = () => {
  let params = useParams();

  const countryContext = useContext(CountryContext);

  const { country, loadCountry, countries, loadCountries } = countryContext;

  useEffect(() => {
    loadCountry(params.country);
    loadCountries();
    //eslint-disable-next-line
  }, []);

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
  } = country;

  let arr = [];

  let borderCountries;

  if (languages !== undefined) {
    languages.forEach(({ name }) => arr.push(name));
  }

  try {
    if (borders) {
      borderCountries = [...borders]
        .map((country) =>
          [...countries].filter(({ alpha3Code: code }) => code === country)
        )
        .map(([{ name }]) => name);
    }
  } catch {
    console.log('border countries fetched');
  }

  return (
    <section className="px-10 lg:px-40 lg:mt-0">
      <Link
        to="/"
        className="w-24 lg:w-0 bg-white lg:bg-none my-16 lg:my-0 px-4 py-1
        lg:px-0 lg:py-20 flex justify-center lg:justify-start
       items-center gap-2 filter drop-shadow-lg">
        <i className="fas fa-arrow-left"></i>
        <p>Back</p>
      </Link>

      <article
        className="w-full flex flex-col lg:flex-row lg:justify-start
      items-start gap-10 lg:gap-32">
        <div className="flex-none lg:w-7/12">
          <img
            style={{ width: '100%' }}
            src={flag}
            alt={`flag-of-${name}`}
            className="rounded-md"
          />
        </div>

        <aside className="lg:w-6/12 lg:mt-8">
          <h2 className="text-title lg:text-countryXXL font-bold">{name}</h2>
          <div className="pt-5 lg:pb-10 lg:flex lg:gap-16 lg:content-start">
            <div className="flex flex-col gap-4 lg:gap-2">
              <p className="text-hm lg:text-dt">
                <span className="font-normal">Native Name: </span>
                {nativeName}
              </p>
              <p className="text-hm lg:text-dt">
                <span className="font-normal">Population: </span>
                {population}
              </p>
              <p className="text-hm lg:text-dt">
                <span className="font-normal">Region: </span>
                {region}
              </p>
              <p className="text-hm lg:text-dt">
                <span className="font-normal">Sub Region: </span>
                {subregion}
              </p>
              <p className="text-hm lg:text-dt">
                <span className="font-normal">Capital: </span>
                {capital}
              </p>
            </div>

            <div className="mt-12 lg:mt-0 flex flex-col gap-4 lg:gap-2">
              <p className="text-hm lg:text-dt">
                <span className="font-normal">Top Level Domain: </span>
                {topLevelDomain}
              </p>

              {currencies && (
                <p className="text-hm lg:text-dt">
                  <span className="font-normal">Currencies: </span>
                  {currencies[0].code}
                </p>
              )}
              {arr.length > 0 && (
                <p className="text-hm lg:text-dt">
                  <span className="font-normal">languages: </span>
                  {arr.join(', ')}
                </p>
              )}
            </div>
          </div>

          {borders && borderCountries && (
            <div
              className="mt-12 lg:mt-0 lg:pt-5 flex flex-1 flex-col lg:flex-row
            justify-items-center items-start gap-6">
              <p>
                <span className="font-normal">Border Countries: </span>
              </p>
              <p className="flex-1 flex flex-wrap justify-items-center items-center gap-2">
                {borderCountries.map((country) => (
                  <span
                    key={borderCountries.indexOf(country)}
                    className="inline-block border-2 border-gray-200 rounded-sm p-1 text-sm lg:text-dt">
                    {country}
                  </span>
                ))}
              </p>
            </div>
          )}
        </aside>
      </article>
    </section>
  );
};

export default AboutCountry;
