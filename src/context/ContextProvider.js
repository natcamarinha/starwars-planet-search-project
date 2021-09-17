import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../service/FetchAPI';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

  useEffect(() => {
    async function getPlanet() {
      const planet = await fetchPlanets();
      setPlanets(planet);
    }
    getPlanet();
  }, []);

  function handleChange({ target: { value } }) {
    setFilters({ filterByName: { name: value } });
  }

  const contextValue = {
    planets,
    filters,
    handleChange,
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
