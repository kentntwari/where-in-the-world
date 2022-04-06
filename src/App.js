import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import AboutCountry from './components/pages/AboutCountry';
import CountryState from './context/country/CountryState';
import './App.css';

function App() {
  return (
    <CountryState>
      <Router>
        <main className="App h-full pb-20">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:country" element={<AboutCountry />} />
          </Routes>
        </main>
      </Router>
    </CountryState>
  );
}

export default App;
