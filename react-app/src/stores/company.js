import React, { createContext, useState } from "react";

export const companyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyName, setCompanyName] = useState("from context");

  return (
    <companyContext.Provider value={{ companyName, setCompanyName }}>
      {children}
    </companyContext.Provider>
  );
};
