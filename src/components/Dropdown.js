import React from "react";
import { Form } from "semantic-ui-react";

const Dropdown = (props) => {
  const { options, onChange, label } = props;

  return (
    <Form.Select
      fluid
      label={label}
      onChange={(e, { value }) => {
        onChange(value);
      }}
      options={options.map((option) => {
        return { key: option, value: option, text: option };
      })}
    />
  );
};

export default Dropdown;
