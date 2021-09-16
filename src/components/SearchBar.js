import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  return (
    <Form>
      <Form.Field>
        <label htmlFor="searchBar">{props.title}</label>
        <input
          id="searchBar"
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            props.onChange(e.target.value);
          }}
        />
      </Form.Field>
    </Form>
  );
};

export default SearchBar;
