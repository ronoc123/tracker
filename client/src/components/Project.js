import React from "react";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import SingleDev from "./SingleDev";
const Project = () => {
  const { singleProject, devOnProject } = useAppContext();
  return (
    <div className="project-container">
      <div className="project-title">
        <h1 className="title">title</h1>
        {singleProject[0]?.title}
      </div>
      <div className="project-description big-screen">
        <h1 className="title">Decription</h1>
        {singleProject[0]?.description}
      </div>
      <div className="project-creator big-screen">
        <h1 className="title">Developers</h1>
        <div className="devs">
          {devOnProject.length < 1 && "No Developers on Project"}
          {devOnProject.map((dev, index) => {
            return <SingleDev key={index} value={dev} />;
          })}
        </div>
        <Link to={`/addticket`} className="btn add-dev">
          Add developer
        </Link>
      </div>
    </div>
  );
};

export default Project;
