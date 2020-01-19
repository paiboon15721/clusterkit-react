import React from "react";
import { CompanyProvider } from "./stores/company";
import { AuthProvider } from "./stores/auth";
import Router from "./components/Router";

const token = localStorage.getItem("token");

const App = () => {
  return (
    <AuthProvider token={token}>
      <CompanyProvider>
        <Router />
      </CompanyProvider>
    </AuthProvider>
  );
};

export default App;
