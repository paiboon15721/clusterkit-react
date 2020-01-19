import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./reducers";
import { StoreProvider } from "./mobxStores";
import "antd/dist/antd.css";

ReactDOM.render(
  <StoreProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </StoreProvider>,
  document.getElementById("root")
);
