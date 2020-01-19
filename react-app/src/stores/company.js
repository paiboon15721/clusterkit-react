import React, { createContext, useState, useContext } from "react";

const companyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyName, setCompanyName] = useState("from context");

  return (
    <companyContext.Provider value={{ companyName, setCompanyName }}>
      {children}
    </companyContext.Provider>
  );
};

export const useCompanyContext = () => useContext(companyContext);
