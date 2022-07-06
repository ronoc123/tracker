import { FaWindowRestore } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeProject = ({ title, description, user_name, id }) => {
  return (
    <Link to={`/project/${id}`} className="project">
      <h1 className="project-title">{title}</h1>
      <div className="project-icon">
        <FaWindowRestore />
      </div>
      <p className="project-description">
        <span className="span-title">Description:</span> {description}
      </p>
      <div className="project-creator">Created By: {user_name}</div>
    </Link>
  );
};

export default HomeProject;
