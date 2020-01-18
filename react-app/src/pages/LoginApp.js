import React, { useState } from "react";

const App = props => {
  console.log(props);
  const [userName, setUserName] = useState("my default Username");
  const [password, setPassword] = useState("");

  const handleUserNameChange = e => {
    setUserName(e.target.value.toUpperCase());
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
    <div className="mt-4">
      <h1 className="display-4 mb-3">{props.name}</h1>
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
  );
};

export default App;
