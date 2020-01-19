import React from "react";
import { useCompanyContext } from "../../stores/company";

export default props => {
  const { companyName } = useCompanyContext();

  return (
    <span className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
      {companyName}
    </span>
  );
};
