import React from "react";
import { Form } from "semantic-ui-react";

const DropdownElement = (props) => {
  const { regions, setTerm } = props;
  console.log("regions", regions);

  // const allRegions = regions.map((region, idx) => {
  //   return (
  //     <React.Fragment key={idx}>
  //       <option value={region}>{region}</option>
  //     </React.Fragment>
  //   );
  // });

  // const allRegions = regions.map((region, idx) => {
  //   return (
  //     <React.Fragment key={idx}>
  //       <option value={region}>{region}</option>
  //     </React.Fragment>
  //   );
  // });

  const allRegions = regions.map((region) => {
    return { key: region, value: region, text: region };
  });

  // console.log(all)
  return (
    // <select
    //   className="ui select dropdown"
    //   onChange={(e) => {
    //     setTerm(`region/${e.target.value}`);
    //   }}
    // >
    //   <option value="">Filter by region</option>
    //   {allRegions}
    // </select>
    <Form.Select
      fluid
      label="Filter by region"
      // className="ui select dropdown"
      onChange={(e, { value }) => {
        console.log("value", value);
        setTerm(`region/${value}`);
      }}
      options={allRegions}
    />
  );
};

export default DropdownElement;
