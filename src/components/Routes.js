import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import CountryDetailsPage from "./CountryDetailsPage";
import "semantic-ui-css/semantic.min.css";
import { Segment, Container, Header } from "semantic-ui-react";

const Routes = () => {
  return (
    <div>
      <Segment>
        <Container>
          <Header as="h3">Where is the world?</Header>
        </Container>
      </Segment>

      <Container>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/:countryId" component={CountryDetailsPage} />
        </Router>
      </Container>
    </div>
  );
};

export default Routes;
