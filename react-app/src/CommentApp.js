import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  const handleCommentChange = e => {
    setCurrentComment(e.target.value);
  };

  const handleSubmit = () => {
    setComments([currentComment, ...comments]);
    setCurrentComment("");
  };

  return (
    <div>
      <div className="form-group mt-4">
        <textarea
          value={currentComment}
          onChange={handleCommentChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {comments.map((v, k) => (
        <div key={k} className="alert alert-primary" role="alert">
          {v}
        </div>
      ))}
    </div>
  );
};

export default App;
