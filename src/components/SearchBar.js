import React, { useState } from "react";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.setTerm(`name/${keyword}`);
    setKeyword("");
  };
  return (
    // <div className="ui segment">
    <form className="ui form" onSubmit={onFormSubmit}>
      <div className="field">
        <label>Search video</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
    </form>
    // </div>
  );
};

export default SearchBar;
