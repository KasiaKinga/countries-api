import React from "react";
import { Form } from "semantic-ui-react";

const DropdownElement = (props) => {
  const { regions, filterCountries } = props;

  const allRegions = regions.map((region) => {
    return { key: region, value: region, text: region };
  });

  return (
    <Form.Select
      fluid
      label="Filter by region"
      onChange={(e, { value }) => {
        filterCountries(value);
      }}
      options={allRegions}
    />
  );
};

export default DropdownElement;
