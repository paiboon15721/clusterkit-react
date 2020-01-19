import React, { useRef, useEffect } from "react";

const App = props => {
  const username = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    password.current.focus();
  }, []);

  const handleSubmit = () => {
    const result = {
      userName: username.current.value,
      password: password.current.value
    };
    console.log(result);
  };

  return (
    <div className="mt-4">
      <h1 className="display-4 mb-3">{props.name}</h1>
      <div className="form-group">
        <input defaultValue="username" ref={username} placeholder="username" className="form-control" />
      </div>
      <div className="form-group">
        <input ref={password} placeholder="password" className="form-control" />
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
