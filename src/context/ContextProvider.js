import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanet = async () => (
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((results) => setPlanets([...results.results]))
  );

  useEffect(() => {
    fetchPlanet();
  }, []);

  const contextValue = {
    planets,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
