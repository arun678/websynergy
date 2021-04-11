import React from "react";
import './Sort.css';

export default function Sort(props) {
  return (
    <div className="sort-container">
      <label className="sort-label" htmlFor="sortBy">Sort order</label>
      <div className="sort-select">
      <select id="sortBy" name="sortBy" onChange={props.sort} value={props.value}>
        <option value="">Sort By</option>
        <option value="serialNumber">Serial Number</option>
        <option value="modelNumber">Model Number</option>
      </select>
      </div>
    </div>
  );
}
