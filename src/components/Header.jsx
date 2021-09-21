import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { handleChange, handleNumericValues, handleSubmit } = useContext(PlanetContext);

  return (
    <form>
      <label htmlFor="filter-name">
        Pesquisa por nome:
        <input
          type="text"
          data-testid="name-filter"
          id="filter-name"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="column-filter">
        Filtrar por categoria:
        <select
          name="column"
          data-testid="column-filter"
          id="column-filter"
          onChange={ handleNumericValues }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleNumericValues }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleNumericValues }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Header;
