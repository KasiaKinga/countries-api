import React from "react";

const CountryCard = (props) => {
  const { name, flag, population, region, capital } = props.country;
  // console.log(props.country);
  return (
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

    // <div className="ui cards">
    //   <div className="image">
    //     <img src={flag} />
    //   </div>
    //   <div className="content">
    //     <div className="header">{name}</div>
    //     <div className="description">Population: {population}</div>
    //     <div className="description">Region: {region}</div>
    //     <div className="description">Capital: {capital}</div>
    //   </div>
    // </div>
  );
};

export default CountryCard;
