import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const CountryCard = (props) => {
  const { name, flag, population, region, capital } = props.country;

  return (
    <Card
      as={Link}
      to={{ pathname: `/${name}`, aboutProps: { country: props.country } }}
    >
      <Image src={flag} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Population: {population}</Card.Description>
        <Card.Description>Region: {region}</Card.Description>
        <Card.Description>Capital: {capital}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CountryCard;
