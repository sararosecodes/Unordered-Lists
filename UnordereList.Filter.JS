import React from "react";
import FiltersList from "./Filters/index";
import { filterData } from "./data.js";

const App = () => (
  <div className="App">
    <FiltersList filters={filterData} />
  </div>
);

export default App;
