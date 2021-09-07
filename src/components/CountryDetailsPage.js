import React, { useState, useEffect } from "react";
import countriesApi from "../api/countriesApi";
import CountryDetailList from "./CountryDetailList";
import { Grid, Container, Image, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CountryDetailsPage = (props) => {
  let country;

  const [singleCountry, setSingleCountry] = useState([]);

  // when the user navigates from the parent to this component, we use the country object which is passed from the parent, so the network request is not made
  if (props.location.aboutProps) {
    country = props.location.aboutProps.country;
  }

  useEffect(() => {
    // when the user doesn't navigate here from parent (e.g. refresh the page), the network req is made to fetch the country object
    if (!country) {
      let countryName = props.location.pathname.slice(1);
      const getCountry = async () => {
        const response = await countriesApi.get(`/name/${countryName}`);
        setSingleCountry(response.data);
      };
      getCountry();
    }
  }, []);

  if (singleCountry.length === 0) {
    return (
      <div>
        <Button as={Link} to="/" style={{ margin: "5% 0 5% 0" }}>
          Back
        </Button>
        <Header as="h3">Country Not Found</Header>
      </div>
    );
  }
  country = singleCountry[0];
  return (
    <Container>
      <Button as={Link} to="/" style={{ margin: "5% 0 5% 0" }}>
        Back
      </Button>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image
              src={country.flag}
              size="large"
              style={{ border: "0.5px solid #e0e0e0" }}
            />
          </Grid.Column>

          <Grid.Column width={10}>
            <CountryDetailList country={country} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CountryDetailsPage;
