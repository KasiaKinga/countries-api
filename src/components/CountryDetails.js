import React from "react";
import DetailList from "./DetailList";
import "./CountryDetails.css";

const CountryDetails = (props) => {
  console.log("props", props.location.aboutProps);
  const { country } = props.location.aboutProps;
  return (
    // <div className="ui container">
    //   <div className="ui grid" style={{ background: "gray" }}>
    //     <div className="ui row">
    //       <div className="eleven wide column">
    //         <img src={country.flag} style={{ maxWidth: "460px" }} />
    //       </div>

    //       <div className="five wide column">
    //         <DetailList country={country} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="details ui container">
      <div className="ui items">
        <div className="item">
          <div className="ui image large">
            <img src={country.flag} />
          </div>

          <div className="content">
            <a className="header">{country.name}</a>
            <div className="description">
              <DetailList country={country} />
            </div>
            <div claclassNamess="extra">Additional Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
