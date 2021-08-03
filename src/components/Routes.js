import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import CountryDetails from "./CountryDetails";
import "semantic-ui-css/semantic.min.css";

const Routes = () => {
  return (
    <div>
      <div className="ui segment">
        <div className="ui container">
          <h3>Where is the world?</h3>
        </div>
      </div>
      <main>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/:countryId" component={CountryDetails} />
        </Router>
      </main>
    </div>
  );
};

export default Routes;
