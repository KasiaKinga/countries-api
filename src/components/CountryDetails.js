import React from "react";
import DetailList from "./DetailList";
import { Grid, Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CountryDetails = (props) => {
  const { country } = props.location.aboutProps;

  return (
    <Container>
      <Button as={Link} to="/" style={{ margin: "5% 0 5% 0" }}>
        Back
      </Button>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={country.flag} size="large" />
          </Grid.Column>

          <Grid.Column width={10}>
            <DetailList country={country} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CountryDetails;
