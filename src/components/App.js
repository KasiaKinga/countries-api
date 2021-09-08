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

  // errors, loading
  const [countryNotFound, setCountryNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [filterByRegionTerm, setFilterByRegionTerm] = useState("");
  const [filterByCountryNameTerm, setFilterByCountryNameTerm] = useState("");

  useEffect(() => {
    getCountries("all");
  }, []);

  // handling error when country is not found
  useEffect(() => {
    // if 0 countries and isLoading are displayed, show the error "No country found"
    if (filteredCountries.length === 0 && !isLoading) {
      setCountryNotFound(true);
    }
    // if countries are displayed and error is true, flip the error to false
    else if (filteredCountries.length && countryNotFound) {
      setCountryNotFound(false);
    }
  }, [filteredCountries]);

  // filtering based on the keyword in SearchBar and chosen option from Dropdowan
  useEffect(() => {
    let countryName;
    let searchCountryName;

    const filtered = countries.filter((country) => {
      countryName = country.name.toLowerCase();
      searchCountryName = filterByCountryNameTerm.toLowerCase();
      if (filterByRegionTerm && filterByCountryNameTerm) {
        return (
          countryName.includes(searchCountryName) &&
          country.region === filterByRegionTerm
        );
      } else if (filterByRegionTerm) {
        return country.region === filterByRegionTerm;
      } else {
        return countryName.includes(searchCountryName);
      }
    });
    setFilteredCountries(filtered);
  }, [filterByRegionTerm, filterByCountryNameTerm]);
 

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
  

  return (
    <Container>
      <Grid stackable style={{ marginBottom: "1rem" }}>
        <Grid.Column floated="left" width={5}>
          <SearchBar
            onChange={setFilterByCountryNameTerm}
            title={"Search country"}
          />
          {countryNotFound ? (
            <Header as="h5" style={{ marginTop: "5px", color: "red" }}>
              Country not found
            </Header>
          ) : null}
        </Grid.Column>

        <Grid.Column floated="right" width={5}>
          <Dropdown
            options={regions}
            onChange={setFilterByRegionTerm}
            label={"Filter by region"}
          />
        </Grid.Column>
      </Grid>

      {isLoading ? (
        <Loader active inline="centered" />
      ) : (
        <CountriesList countries={filteredCountries} />
      )}
    </Container>
  );
};

export default App;
