// src/Components/RocketFilter.jsx
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setFilter } from '../Redux/rocketSlice';

const RocketFilter = () => {
  const dispatch = useDispatch();
  const [filter, setLocalFilter] = useState({
    height: '',
    weight: '',
    additionalCriterion: '',
  });

  const handleFilterChange = (e) => {
    setLocalFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const applyFilter = () => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Explore Rockets</h2>
      <div className="flex flex-col space-y-2">
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={filter.height}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={filter.weight}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Additional Criterion:
          <input
            type="text"
            name="additionalCriterion"
            value={filter.additionalCriterion}
            onChange={handleFilterChange}
          />
        </label>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={applyFilter}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default RocketFilter;
