import React from "react";
import CountryCard from "./CountryCard";
import { Card } from "semantic-ui-react";

const ListOfCountries = ({ countries }) => {
  const listOfCountries = countries.map((country) => {
    return <CountryCard country={country} key={country.numericCode} />;
  });

  return (
    <Card.Group centered stackable itemsPerRow={4}>
      {listOfCountries}
    </Card.Group>
  );
};

export default ListOfCountries;
