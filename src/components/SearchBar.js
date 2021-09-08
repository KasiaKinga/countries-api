import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");
  // console.log("keyword", keyword);
  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   props.onSubmit(keyword);
  //   setKeyword("");
  // };

  return (
    <Form>
      <Form.Field>
        <label htmlFor="searchBar">{props.title}</label>
        <input
          id="searchBar"
          type="text"
          value={keyword}
          onChange={(e) => {
            // console.log(e.target.value);
            setKeyword(e.target.value);
            props.onChange(e.target.value);
          }}
        />
      </Form.Field>
    </Form>
  );
};

export default SearchBar;
