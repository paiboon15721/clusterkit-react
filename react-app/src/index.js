import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div className="container pb-4">
    <div className="form-group">
      <input placeholder="username" className="form-control" />
    </div>
    <div className="form-group">
      <input placeholder="password" className="form-control" />
    </div>
    <div className="form-group">
      <button className="btn btn-primary">Submit</button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
