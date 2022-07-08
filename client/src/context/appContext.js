import React, { useReducer, useContext } from "react";
import reducer from "./reducer.js";
import axios from "axios";

import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGOUT_USER,
  GET_PROJECT_BEGIN,
  GET_PROJECT_SUCCESS,
  // GET_PROJECT_ERROR,
  // GET_SINGLE_PROJECT_ERROR,
  GET_SINGLE_PROJECT_BEGIN,
  GET_SINGLE_PROJECT_SUCCESS,
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  GET_PROJECT_TICKET_BEGIN,
  GET_PROJECT_TICKET_SUCCESS,
  // GET_PROJECT_TICKET_ERROR,
  GET_MY_TICKET_BEGIN,
  GET_MY_TICKET_SUCCESS,
  // GET_MY_TICKET_ERROR,
  GET_USER_PROJECT_BEGIN,
  GET_USER_PROJECT_SUCCESS,
  GET_USER_TICKET_BEGIN,
  GET_USER_TICKET_SUCCESS,
  // GET_USER_PROJECT_ERROR,
  EDIT_USER_INFO_BEGIN,
  EDIT_USER_INFO_SUCCESS,
  // EDIT_USER_INFO_ERROR,
  CREATE_TICKET_BEGIN,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_ERROR,
  DELETE_PROJECT_BEGIN,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_ERROR,
  EDIT_FILTERS,
  FILTERED_TICKETS,
  CLEAR_FILTERS,
  GET_ALL_TICKETS_BEGIN,
  GET_ALL_TICKETS_SUCCESS,
  GET_ALL_TICKETS_ERROR,
  CLEAR_TICKET_VALUES,
  GET_SINGLE_TICKET_BEGIN,
  GET_SINGLE_TICKET_SUCCESS,
} from "../action.js";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  isEditing: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  projects: [],
  projects_loading: false,
  projects_error: false,
  project_title: "",
  project_description: "",
  showAlert: false,
  tickets: [],
  myTickets: [],
  myTicketLoading: false,
  myTicketError: false,
  projectTicket: [],
  projectTicketLoading: false,
  projectTicketError: false,
  singleProjectLoading: false,
  singleProject: [],
  singleProjectError: false,
  devOnProjectLoading: false,
  devOnProjectError: false,
  devOnProject: [],
  devOnTicketLoading: false,
  devOnProjectError: false,
  devOnTicket: [],
  ticket_title: "",
  ticket_description: "",
  ticket_type: "functional error",
  ticket_type_options: [
    "functional error",
    "performance defect",
    "usability defect",
    "security defect",
    "compatibility defect",
    "other",
  ],
  ticket_severity: "critical",
  ticket_severity_options: ["critical", "high", "medium", "low"],
  ticket_status: "open",
  ticket_status_options: ["open", "closed", "pending"],
  deleteProjectError: false,
  filtered_tickets: [],
  filter_ticket_type_options: ["all", "critical", "high", "medium", "low"],
  filter_ticket_severity_options: ["all", "critical", "high", "medium", "low"],
  filter_ticket_status_options: ["all", "open", "closed", "status"],
  filter_text: "",
  filter_status: "all",
  filter_severity: "all",
  filter_type: "all",
  searchForm: false,
  singleTicket: [],
  singleTicketLoading: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const setupUser = async ({ endPoint, currentUser, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const response = await axios.post(`/api/v1/auth/${endPoint}`, {
        user_name: currentUser.name,
        email: currentUser.email,
        user_password: currentUser.password,
        user_role: "user",
      });
      const { user, token } = response.data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const fetchProjects = async () => {
    let url = `/project`;

    dispatch({ type: GET_PROJECT_BEGIN });
    try {
      const { data } = await authFetch(url);

      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      // logoutUser()
    }
  };

  const createProject = async () => {
    dispatch({ type: CREATE_PROJECT_BEGIN });

    try {
      const { project_title, project_description } = state;
      await authFetch.post("/project", {
        title: project_title,
        description: project_description,
      });
      dispatch({ type: CREATE_PROJECT_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
      clearAlert();
    } catch (error) {
      dispatch({
        type: CREATE_PROJECT_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const createTicket = async (id) => {
    dispatch({ type: CREATE_TICKET_BEGIN });
    let url = `/ticket/${id}`;
    try {
      const {
        ticket_title,
        ticket_status,
        ticket_description,
        ticket_severity,
        ticket_type,
      } = state;
      await authFetch.post(url, {
        title: ticket_title,
        description: ticket_description,
        type: ticket_type,
        severity: ticket_severity,
        status: ticket_status,
      });
      dispatch({ type: CREATE_TICKET_SUCCESS });
      dispatch({ type: CLEAR_TICKET_VALUES });
      clearAlert();
    } catch (error) {
      dispatch({
        type: CREATE_TICKET_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const deleteProject = async (id) => {
    dispatch({ type: DELETE_PROJECT_BEGIN });
    let url = `/project/${id}`;
    try {
      await authFetch.delete(url);
      fetchProjects();
      clearAlert();
    } catch (error) {
      dispatch({ type: DELETE_PROJECT_ERROR });
      clearAlert();
      // logoutUser()
    }
  };

  const fetchMyTickets = async () => {};

  const fetchSingleProject = async (project_id) => {
    dispatch({ type: GET_SINGLE_PROJECT_BEGIN });
    let url = `/project/${project_id}`;
    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_SINGLE_PROJECT_SUCCESS, payload: data.project });
    } catch (error) {}
  };

  const fetchTicketsOnProject = async (project_id) => {
    dispatch({ type: GET_PROJECT_TICKET_BEGIN });
    let url = `/ticket/${project_id}`;
    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_PROJECT_TICKET_SUCCESS, payload: data.tickets });
    } catch (error) {}
  };

  const fetchUsersOnProject = async (project_id) => {
    dispatch({ type: GET_USER_PROJECT_BEGIN });
    let url = `/projectusers/${project_id}`;

    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_USER_PROJECT_SUCCESS, payload: data.developers });
    } catch (error) {}
  };

  const fetchUsersOnTicket = async (ticket_id) => {
    dispatch({ type: GET_USER_TICKET_BEGIN });
    let url = `/ticketusers/${ticket_id}`;
    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_USER_TICKET_SUCCESS, payload: data.developers });
    } catch (error) {}
  };

  const getMyTickets = async () => {
    dispatch({ type: GET_MY_TICKET_BEGIN });
    let url = `/ticket`;
    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_MY_TICKET_SUCCESS, payload: data.tickets });
    } catch (error) {}
  };

  const editUserInfo = async ({ name, userEmail }) => {
    dispatch({ type: EDIT_USER_INFO_BEGIN });
    let url = `/auth/updateuser`;
    try {
      const { data } = await authFetch.patch(url, {
        user_name: name,
        email: userEmail,
      });

      dispatch({ type: EDIT_USER_INFO_SUCCESS, payload: data });
      addUserToLocalStorage({ user: data.user, token: data.token });
    } catch (error) {}
    clearAlert();
  };

  const addFilter = () => {
    const { myTickets } = state;
    dispatch({
      type: EDIT_FILTERS,
      payload: myTickets,
    });
    dispatch({ type: FILTERED_TICKETS });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const fetchTickets = async () => {
    dispatch({ type: GET_ALL_TICKETS_BEGIN });
    let url = "/ticket/alltickets";
    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_ALL_TICKETS_SUCCESS, payload: data });
    } catch (error) {}
  };

  const fetchSingleTicket = async (ticket_id) => {
    dispatch({ type: GET_SINGLE_TICKET_BEGIN });
    let url = `/ticket/singleticket/${ticket_id}`;
    try {
      const { data } = await authFetch(url);
      dispatch({ type: GET_SINGLE_TICKET_SUCCESS, payload: data.ticket });
    } catch (error) {}
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setupUser,
        displayAlert,
        logoutUser,
        fetchProjects,
        createProject,
        handleChange,
        fetchTicketsOnProject,
        fetchMyTickets,
        fetchSingleProject,
        fetchUsersOnProject,
        getMyTickets,
        editUserInfo,
        createTicket,
        deleteProject,
        addFilter,
        clearFilters,
        fetchTickets,
        fetchUsersOnTicket,
        fetchSingleTicket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
