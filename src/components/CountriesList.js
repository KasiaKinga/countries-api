import React from "react";
import CountryItem from "./CountryItem";
import { Card } from "semantic-ui-react";

const CountriesList = ({ countries }) => {
  const listOfCountries = countries.map((country) => {
    return <CountryItem country={country} key={country.numericCode} />;
  });

  return (
    <Card.Group centered stackable itemsPerRow={4}>
      {listOfCountries}
    </Card.Group>
  );
};

export default CountriesList;
