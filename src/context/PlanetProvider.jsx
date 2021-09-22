import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../service/FetchAPI';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [changeFilters, setChangeFilters] = useState({
    filterByNumericValues: [],
  });

  const [columnOptions, setColumnOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  useEffect(() => {
    async function getPlanet() {
      const planet = await fetchPlanets();
      setPlanets(planet);
    }
    getPlanet();
  }, []);

  function handleChange({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: { name: value } });
  }

  function handleNumericValues({ target: { name, value } }) {
    const { filterByNumericValues } = changeFilters;
    setChangeFilters({
      filterByNumericValues: { ...filterByNumericValues, [name]: value } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { filterByNumericValues } = changeFilters;
    setFilters({
      ...filters,
      filterByNumericValues: { ...filterByNumericValues, filterByNumericValues },
    });
    const newArray = columnOptions
      .filter((column) => column !== filterByNumericValues.column);
    setColumnOptions(newArray);
  }

  const contextValue = {
    planets,
    filters,
    columnOptions,
    handleChange,
    handleNumericValues,
    handleSubmit,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
