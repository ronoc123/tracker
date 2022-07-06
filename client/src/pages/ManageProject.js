import Wrapper from "../assests/wrappers/ProjectPage.js";
import ProjectContainer from "../components/ProjectContainer.js";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext.js";

const ManageProject = () => {
  const { showAlert } = useAppContext();
  return (
    <Wrapper className="full-page">
      <h1 className="title">Manage Projects</h1>
      {showAlert && <Alert />}
      <div className="btn-container">
        <Link className="btn create-btn" to="/addproject">
          New Project
        </Link>
      </div>
      <ProjectContainer />
    </Wrapper>
  );
};

export default ManageProject;
