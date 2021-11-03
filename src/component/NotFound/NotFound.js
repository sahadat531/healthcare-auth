import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>This Page is Not Found</h2>
      <button className="btn btn-warning">
        <Link to="/home">Back Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
