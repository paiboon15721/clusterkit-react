import React, { useState } from "react";

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
        <h1 className="display-4 mb-3">Login App</h1>
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

export default App;
