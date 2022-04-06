import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Fragment>
      <header className="bg-white px-4 py-5 lg:px-40 lg:py-5 filter drop-shadow-sm">
        <nav className=" flex justify-between items-center">
          <Link to="/" className="font-sans lg:text-title font-bold">
            Where in the world?
          </Link>

          <div className="toggle-mode flex items-center">
            <i className="far fa-moon"></i>
            <p className="pl-2 lg:text-dt">Dark Mode</p>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
