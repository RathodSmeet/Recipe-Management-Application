import React, { useState } from 'react';

const RecipeFilter = ({ onFilter }) => {
  const [filterCriteria, setFilterCriteria] = useState('');

  const handleChange = (e) => {
    setFilterCriteria(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter Recipes:</label>
      <select id="filter" value={filterCriteria} onChange={handleChange}>
        <option value="">All</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
};

export default RecipeFilter;
