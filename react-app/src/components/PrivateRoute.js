import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../stores/auth";

const PrivateRoute = ({ children, ...rest }) => {
  const { token: isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
