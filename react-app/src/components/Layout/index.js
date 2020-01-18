import React from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import Dashboard from "../../pages/Dashboard";

const App = () => (
  <>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <MenuList />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Dashboard />
        </main>
      </div>
    </div>
  </>
);

export default App;
