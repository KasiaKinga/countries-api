import React, { useState, useEffect } from "react";
import countriesApi from "../api/countriesApi";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { Grid, Container, Header, Loader } from "semantic-ui-react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countryNotFound, setCountryNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries("all");
  }, []);

  const getCountries = async (searchTerm) => {
    try {
      const response = await countriesApi.get(`/${searchTerm}`);
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (error) {
      setCountryNotFound(true);
    }
    setIsLoading(false);
  };

  const filterCountries = (region) => {
    const filtered = countries.filter((country) => {
      return country.region === region;
    });
    setFilteredCountries(filtered);
  };

  const getCountry = async (searchTerm) => {
    try {
      const response = await countriesApi.get(`/name/${searchTerm}`);
      setFilteredCountries(response.data);
      setCountryNotFound(false);
    } catch (error) {
      setCountryNotFound(true);
    }
  };

  return (
    <Container>
      <Grid stackable style={{ marginBottom: "1rem" }}>
        <Grid.Column floated="left" width={5}>
          <SearchBar onSubmit={getCountry} title={"Search country"} />
          {countryNotFound ? (
            <Header as="h5" style={{ marginTop: "5px", color: "red" }}>
              Country not found
            </Header>
          ) : null}
        </Grid.Column>

        <Grid.Column floated="right" width={5}>
          <Dropdown
            options={regions}
            onChange={filterCountries}
            label={"Filter by region"}
          />
        </Grid.Column>
      </Grid>

      {isLoading ? (
        <Loader active inline="centered" />
      ) : (
        <CountriesList countries={filteredCountries} />
      )}
      {/* <CountriesList countries={filteredCountries} /> */}
    </Container>
  );
};

export default App;
