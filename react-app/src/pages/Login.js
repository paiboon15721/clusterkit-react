import React from "react";
import { useAuth } from "../stores/auth";
import axios from "axios";
import { useHistory } from "react-router-dom";

const App = () => {
  const { setToken } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    const { data } = await axios.get("http://localhost:4000/login");
    setToken(data.user);
    localStorage.setItem("token", data.user);
    history.push("/dashboard");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        vh: "100%"
      }}
    >
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default App;
