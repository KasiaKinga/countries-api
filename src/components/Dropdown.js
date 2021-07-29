import React from "react";

const Dropdown = (props) => {
  const { regions, setTerm } = props;

  const allRegions = regions.map((region, idx) => {
    return (
      <React.Fragment key={idx}>
        <option value={region}>{region}</option>
      </React.Fragment>
    );
  });

  return (
    <select
      className="ui select dropdown"
      onChange={(e) => {
        setTerm(`region/${e.target.value}`);
      }}
    >
      <option value="">Filter by region</option>
      {allRegions}
    </select>
  );
};

export default Dropdown;
