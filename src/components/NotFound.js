import { Link } from "react-router-dom";
import "./notFound.css";
import React from "react";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default NotFound;
