import React, { useState, useEffect } from "react";
import countriesApi from "../api/countriesApi";
import ListOfCountries from "./ListOfCountries";
import SearchBar from "./SearchBar";
import DropdownElement from "./DropdownElement";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState("all");
  console.log("term", term);

  // only first fetching is for all countries
  useEffect(() => {
    callCountries(term);
  }, [term]);

  // then we callCountries by passing the key from SearchBar and Dropdown
  const callCountries = async (term) => {
    const response = await countriesApi.get(`/${term}`);
    setCountries(response.data);
  };

  return (
    // <div className="ui container">
    //   <div className="ui segment">
    //     <div className="ui grid">
    //       <div className="bottom aligned row">
    //         <div className="left floated five wide column">
    //           <SearchBar setTerm={setTerm} />
    //         </div>

    //         <div className="right floated five wide column">
    //           <Dropdown regions={regions} setTerm={setTerm} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <ListOfCountries countries={countries} />
    // </div>
    <div className="ui container">
      <div className="ui segment">
        <div className="ui grid">
          <div className="bottom aligned row">
            <div className="left floated five wide column">
              <SearchBar setTerm={setTerm} />
            </div>

            <div className="right floated five wide column">
              <DropdownElement regions={regions} setTerm={setTerm} />
            </div>
          </div>
        </div>
      </div>

      <ListOfCountries countries={countries} />
    </div>
  );
};

export default App;
