import React from "react";

const DetailList = (props) => {
  const { country } = props;
  return (
    // <div>
    <div className="content">
      {/* <h2 className="header">{country.name}</h2> */}
      <div className="item">Native Name: {country.nativeName}</div>
      <div className="item">Population: {country.population}</div>
      <div className="item">Region: {country.region}</div>
      <div className="item">Sub Region: {country.subregion}</div>

      <div className="item">Top Level Domain: {country.topLevelDomain[0]}</div>

      <div className="item">Currencies: {country.currencies[0].code}</div>

      <div className="item">Languages: {country.languages[0].name}</div>
    </div>
  );
};

export default DetailList;
