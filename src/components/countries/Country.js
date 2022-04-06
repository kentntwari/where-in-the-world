import React from 'react';
import Flag from './Flag';
import Specs from './Specs';
import { Link } from 'react-router-dom';

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <Link to={`/${name}`}>
      <div className=" bg-white rounded-md filter drop-shadow flex flex-col gap-0">
        <Flag flag={flag.svg} />
        <Specs name={name} population={population} region={region} capital={capital} />
      </div>
    </Link>
  );
};

export default Country;
