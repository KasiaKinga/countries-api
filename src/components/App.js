import React, { useState, useEffect } from "react";
import countriesApi from "../api/countriesApi";
import ListOfCountries from "./ListOfCountries";
import SearchBar from "./SearchBar";
import DropdownElement from "./DropdownElement";
import { Grid, Container } from "semantic-ui-react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState("all");

  useEffect(() => {
    callCountries(term);
  }, [term]);

  const callCountries = async (term) => {
    const response = await countriesApi.get(`/${term}`);
    setCountries(response.data);
  };

  return (
    <Container>
      <Grid stackable style={{ marginBottom: "1rem" }}>
        <Grid.Column floated="left" width={5}>
          <SearchBar setTerm={setTerm} />
        </Grid.Column>

        <Grid.Column floated="right" width={5}>
          <DropdownElement regions={regions} setTerm={setTerm} />
        </Grid.Column>
      </Grid>
      <ListOfCountries countries={countries} />
    </Container>
  );
};

export default App;
