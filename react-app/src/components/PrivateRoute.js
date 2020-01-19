import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../stores/auth";

const PrivateRoute = props => {
  const { token: isAuthenticated } = useAuth();
  const { children, ...rest } = props;
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
