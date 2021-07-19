import React from 'react';

const Filter = ({ filtetText, count, onChange }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filtetText}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
