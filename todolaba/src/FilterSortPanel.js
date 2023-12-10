import React from 'react';

const FilterSortPanel = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter-sort-panel">
      <label>
        Фильтр:
        <select onChange={handleFilterChange}>
          <option value="all">Все</option>
          <option value="completed">Выполненные</option>
          <option value="uncompleted">Невыполненные</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSortPanel;