import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({ title, description, createdby, id }) => {
  return (
    <div className="project">
      <div>{title}</div>
      <div className="big-screen">{description}</div>
      <div className="big screen">{createdby}</div>
      <Link to={`/project/${id}`}>details</Link>
    </div>
  );
};

export default SingleProject;
