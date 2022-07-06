import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const SingleProject = ({ title, description, user_name, id }) => {
  const { deleteProject } = useAppContext();
  return (
    <div className="project">
      <div>{title}</div>
      <div className="big-screen">{description}</div>
      <div className="big screen">{user_name}</div>
      <div className="links">
        <Link to={`/project/${id}`} className="details-btn">
          Details
        </Link>
        <Link to={`/project/${id}`} className="edit-btn">
          Edit
        </Link>
        <button
          className="delete-btn"
          onClick={() => {
            deleteProject(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
