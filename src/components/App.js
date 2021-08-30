import React, { useState, useEffect } from "react";
import countriesApi from "../api/countriesApi";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { Grid, Container } from "semantic-ui-react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [term, setTerm] = useState("all");

  useEffect(() => {
    getCountries(term);
  }, [term]);

  const getCountries = async (searchTerm) => {
    const response = await countriesApi.get(`/${searchTerm}`);
    setCountries(response.data);
    setFilteredCountries(response.data);
  };

  const filterCountries = (region) => {
    const filtered = countries.filter((country) => {
      return country.region === region;
    });
    setFilteredCountries(filtered);
  };

  return (
    <Container>
      <Grid stackable style={{ marginBottom: "1rem" }}>
        <Grid.Column floated="left" width={5}>
          <SearchBar setTerm={setTerm} />
        </Grid.Column>

        <Grid.Column floated="right" width={5}>
          <Dropdown regions={regions} filterCountries={filterCountries} />
        </Grid.Column>
      </Grid>
      <CountriesList countries={filteredCountries} />
    </Container>
  );
};

export default App;
