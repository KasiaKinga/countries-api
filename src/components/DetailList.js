import React, { useState, useEffect } from "react";
import { Grid, List } from "semantic-ui-react";
import { formatNumber } from "./util.js";

const DetailList = (props) => {
  const { country } = props;

  const currency = country.currencies.map((currency) => {
    return currency.name;
  });

  const language = country.languages
    .map((language) => {
      return language.name;
    })
    .join(", ");

  return (
    <List>
      <List.Content style={{ lineHeight: "200%" }}>
        <List.Header as="h2">{country.name}</List.Header>
        <Grid stackable={true}>
          <Grid.Row>
            <Grid.Column width={7}>
              <List.Description>
                <b>Native Name:</b> {country.nativeName}
              </List.Description>
              <List.Description>
                <b>Population:</b> {formatNumber(country.population)}
              </List.Description>
              <List.Description>
                <b>Region:</b> {country.region}
              </List.Description>
              <List.Description>
                <b>Sub Region:</b> {country.subregion}
              </List.Description>
            </Grid.Column>

            <Grid.Column width={6}>
              <List.Description>
                <b>Top Level Domain:</b> {country.topLevelDomain}
              </List.Description>
              <List.Description>
                <b>Currencies:</b> {currency}
              </List.Description>
              <List.Description>
                <b>Languages:</b> {language}
              </List.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Content>
    </List>
  );
};

export default DetailList;
