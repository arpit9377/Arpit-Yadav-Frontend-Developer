// src/Components/RocketFilter.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../Redux/rocketSlice';

const RocketFilter = () => {
  const dispatch = useDispatch();
  const [filter, setLocalFilter] = useState({ height: null, weight: null, additionalCriterion: null });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const applyFilter = () => {
    console.log('Applying filter:', filter); // Debugging: Log the filter before applying
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <label>
        Height:
        <input type="text" name="height" value={filter.height || ''} onChange={handleFilterChange} />
      </label>
      <label>
        Weight:
        <input type="text" name="weight" value={filter.weight || ''} onChange={handleFilterChange} />
      </label>
      <label>
        Additional Criterion:
        <input type="text" name="additionalCriterion" value={filter.additionalCriterion || ''} onChange={handleFilterChange} />
      </label>
      <button onClick={applyFilter}>Apply Filter</button>
    </div>
  );
};

export default RocketFilter;
