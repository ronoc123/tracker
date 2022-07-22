import Wrapper from "../assests/wrappers/Administration";
import { useAppContext } from "../context/appContext";
import { useEffect, useState } from "react";
import FormRow from "../components/FormRow";
import { AiOutlineUserAdd } from "react-icons/ai";
import FormRowSelect from "../components/FormRowSelect";

const ManageRole = () => {
  const [search, setSearch] = useState(false);
  const {
    // addToProject,
    fetchUsers,
    handleChange,
    searchDev,
    addUserFilter,
    filtered_project_dev_options,
    projectDevOptions,
    fetchSingleUser,
    adminEdit,
    // addDevToProject,
    // getDevsOnSingleProject,
    // devOnSingleProject,
  } = useAppContext();

  const devSubmit = (userId) => {
    fetchSingleUser(userId);
  };
  const searchSubmit = (e) => {
    e.preventDefault();
    addUserFilter();
    setSearch(true);
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrapper className="full-page">
      <div className="container">
        <div className="user-search-container">
          <div className="single-user-container">
            <h2 className="user-title">User Information</h2>
            <FormRow
              type="text"
              labelText="Username"
              name="admin_user_name"
              value={adminEdit[0]?.user_name}
              handleChange={handleUserInput}
            />
            <FormRow type="text" name="Email" value={adminEdit[0]?.email} />
            <FormRowSelect
              name="admin_role"
              value={adminEdit[0]?.user_role}
              labelText="Role"
              list={["user", "manager", "admin"]}
            />
            <h3>User ID : {adminEdit[0]?.user_id}</h3>
            <div className="btns">
              <button type="submit" className="edit-btn">
                Save Changes
              </button>
              <button type="submit" className="delete-btn">
                Delete User
              </button>
            </div>
          </div>
          <form className="search-container" onSubmit={searchSubmit}>
            <FormRow
              type="text"
              name="searchDev"
              value={searchDev}
              handleChange={handleUserInput}
              labelText="Search"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="user-info-container">
          <form className="user-container">
            {!search
              ? projectDevOptions.map((dev) => {
                  return (
                    <div
                      className="dev-btn"
                      // type="submit"
                      key={dev.user_id}
                      onClick={() => {
                        devSubmit(dev.user_id);
                      }}
                    >
                      <AiOutlineUserAdd />
                      <span className="span-text">{dev.user_name}</span>
                    </div>
                  );
                })
              : filtered_project_dev_options.map((dev) => {
                  return (
                    <div
                      className="dev-btn"
                      // type="submit"
                      key={dev.user_id}
                      onClick={() => {
                        devSubmit(dev.user_id);
                      }}
                    >
                      <AiOutlineUserAdd className="icon" />
                      <span className="span-text">{dev.user_name}</span>
                    </div>
                  );
                })}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ManageRole;
