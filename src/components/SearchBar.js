import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.setTerm(`name/${keyword}`);
    setKeyword("");
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Field>
        <label>Search country</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Form.Field>
    </Form>
  );
};

export default SearchBar;
