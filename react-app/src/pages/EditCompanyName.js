import React from "react";

const App = props => {
  return (
    <div className="form-group">
      <h1>{props.companyName}</h1>
      <input
        value={props.companyName}
        onChange={e => props.setCompanyName(e.target.value)}
        className="form-control"
        placeholder="companyName"
      />
    </div>
  );
};

export default App;
