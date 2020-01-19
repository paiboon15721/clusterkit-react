import React, { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = props => {
  console.log(props);
  const [token, setToken] = useState(props.token);

  return (
    <authContext.Provider value={{ token, setToken }}>
      {props.children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
