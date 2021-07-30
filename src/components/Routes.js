import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import CountryDetails from "./CountryDetails";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/:countryId" component={CountryDetails} />
    </Router>
  );
};

export default Routes;
