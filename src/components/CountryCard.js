import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const CountryCard = (props) => {
  const { name, flag, population, region, capital } = props.country;

  return (
    // <Link to={{ pathname: `/${name}`, aboutProps: { country: props.country } }}>
    //   <div className="card">
    //     <div className="image">
    //       <img src={flag} />
    //     </div>
    //     <div className="content">
    //       <div className="header">{name}</div>
    //       <div className="description">Population: {population}</div>
    //       <div className="description">Region: {region}</div>
    //       <div className="description">Capital: {capital}</div>
    //     </div>
    //   </div>
    // </Link>
    // <Link to={{ pathname: `/${name}`, aboutProps: { country: props.country } }}>

    <Card
      as={Link}
      to={{ pathname: `/${name}`, aboutProps: { country: props.country } }}
    >
      <Image src={flag} style={{ height: "60%", width: "auto" }} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Population: {population}</Card.Description>
        <Card.Description>Region: {region}</Card.Description>
        <Card.Description>Capital: {capital}</Card.Description>
      </Card.Content>
    </Card>

    // </Link>
  );
};

export default CountryCard;
