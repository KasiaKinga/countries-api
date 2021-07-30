import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  const { name, flag, population, region, capital } = props.country;

  return (
    <Link to={{ pathname: `/${name}`, aboutProps: { country: props.country } }}>
      <div className="card">
        <div className="image">
          <img src={flag} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">Population: {population}</div>
          <div className="description">Region: {region}</div>
          <div className="description">Capital: {capital}</div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
