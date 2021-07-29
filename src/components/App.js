import React, { useState, useEffect } from "react";
import countriesApi from "../api/countriesApi";
import ListOfCountries from "./ListOfCountries";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState("all");

  // only first fetching is for all countries
  useEffect(() => {
    callCountries(term);
  }, [term]);

  // then we callCountries by passing the key from SearchBar and Dropdown
  const callCountries = async (term) => {
    const response = await countriesApi.get(`/${term}`);
    setCountries(response.data);
  };

  return (
    <div className="ui container">
      <div className="ui segment">
        <SearchBar setTerm={setTerm} />
        <Dropdown regions={regions} setTerm={setTerm} />
      </div>
      <ListOfCountries countries={countries} />
    </div>
  );
};

export default App;
