import React from "react";
import Filter from "./Filter.js";

const renderFilter = (filter) => <Filter key={filter.id} filter={filter} />;

const FiltersList = (props) => {
  if (!props.filters) {
    return null;
  }
  const filterListElements = props.filters.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
