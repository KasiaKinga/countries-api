import React from "react";
import CountryDetailList from "./CountryDetailList";
import { Grid, Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CountryDetailsPage = (props) => {
  const { country } = props.location.aboutProps;

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
