import React, { useContext } from "react";
import { companyContext } from "../stores/company";

const App = () => {
  const { companyName, setCompanyName } = useContext(companyContext);
  return (
    <div className="form-group">
      <h1>{companyName}</h1>
      <input
        value={companyName}
        onChange={e => setCompanyName(e.target.value)}
        className="form-control"
        placeholder="companyName"
      />
    </div>
  );
};

export default App;
