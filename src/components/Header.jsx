import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { handleChange } = useContext(PlanetContext);

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
    </form>
  );
}

export default Header;
