import React, { useState } from "react";

const App = () => {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = e => {
    setCurrentComment(e.target.value);
  };

  const handleSubmit = () => {
    setComments([currentComment, ...comments]);
    setCurrentComment("");
    console.log(comments);
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
