import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const {
    planets,
    filters: {
      filterByName,
      filterByNumericValues,
    },
  } = useContext(PlanetContext);

  const { name } = filterByName;
  const { column, comparison, value } = filterByNumericValues;

  if (planets.length < 1) {
    return <h4>Loading...</h4>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((planet, index) => (
            <th key={ index }>{planet}</th>))}
        </tr>
      </thead>
      { planets
        .filter((planet) => planet.name.toLowerCase().includes(name))
        .filter((planet) => {
          if (comparison === 'maior que') {
            return Number(planet[column]) > Number(value);
          }
          if (comparison === 'menor que') {
            return Number(planet[column]) < Number(value);
          }
          if (comparison === 'igual a') {
            return Number(planet[column]) === Number(value);
          }
          return planets;
        })
        .map((planet, index) => (
          <tbody key={ index }>
            <tr>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          </tbody>
        ))}
    </table>
  );
}

export default Table;
