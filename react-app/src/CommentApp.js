import React, { useState } from "react";

const App = () => {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = e => {
    setCurrentComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log(currentComment);
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
      <div className="alert alert-primary" role="alert">
        Comment....
      </div>
      <div className="alert alert-primary" role="alert">
        Comment....
      </div>
    </div>
  );
};

export default App;
