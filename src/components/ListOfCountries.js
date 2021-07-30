import React from "react";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const ListOfCountries = ({ countries }) => {
  const listOfCountries = countries.map((country) => {
    return <CountryCard country={country} key={country.numericCode} />;
  });

  return <div className="ui stackable four cards">{listOfCountries}</div>;
};

export default ListOfCountries;
