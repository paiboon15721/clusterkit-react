import React from "react";
import { useLocalStore } from "mobx-react-lite";
import counter from "./counter";

const storeContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = {
    counter: useLocalStore(counter)
  };
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => React.useContext(storeContext);
