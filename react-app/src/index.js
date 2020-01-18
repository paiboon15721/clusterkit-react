import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const result = {
      userName,
      password
    };

    console.log(result);
  };

  return (
    <div className="container">
      <div className="mt-4">
        <div className="form-group">
          <input
            value={userName}
            onChange={handleUserNameChange}
            placeholder="username"
            className="form-control"
          />
        </div>
        <div value={password} className="form-group">
          <input
            onChange={handlePasswordChange}
            placeholder="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
