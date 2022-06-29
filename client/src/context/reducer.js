import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  GET_PROJECT_BEGIN,
  GET_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_ERROR,
  GET_SINGLE_PROJECT_BEGIN,
  GET_SINGLE_PROJECT_SUCCESS,
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  GET_PROJECT_TICKET_BEGIN,
  GET_PROJECT_TICKET_SUCCESS,
  GET_PROJECT_TICKET_ERROR,
  GET_MY_TICKET_BEGIN,
  GET_MY_TICKET_SUCCESS,
  GET_MY_TICKET_ERROR,
  GET_USER_PROJECT_BEGIN,
  GET_USER_PROJECT_SUCCESS,
  GET_USER_PROJECT_ERROR,
  EDIT_USER_INFO_BEGIN,
  EDIT_USER_INFO_SUCCESS,
  EDIT_USER_INFO_ERROR,
} from "../action.js";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "fail",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertText: "" };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "fail",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  if (action.type === GET_PROJECT_BEGIN) {
    return { ...state, projects_loading: true };
  }

  if (action.type === GET_PROJECT_SUCCESS) {
    return {
      ...state,
      projects: action.payload.projects,
      projects_loading: false,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CREATE_PROJECT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: "New Project Created!",
    };
  }
  if (action.type === CREATE_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alert: action.payload.msg,
    };
  }

  if (action.type === CLEAR_VALUES) {
    return {
      ...state,
      project_title: "",
      project_description: "",
    };
  }

  if (action.type === GET_PROJECT_TICKET_BEGIN) {
    return {
      ...state,
      projectTicketLoading: true,
    };
  }

  if (action.type === GET_PROJECT_TICKET_SUCCESS) {
    return {
      ...state,
      projectTicketLoading: false,
      projectTicket: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PROJECT_BEGIN) {
    return {
      ...state,
      singleProjectLoading: true,
    };
  }

  if (action.type === GET_SINGLE_PROJECT_SUCCESS) {
    return {
      ...state,
      singleProjectLoading: false,
      singleProject: action.payload,
    };
  }

  if (action.type === GET_USER_PROJECT_BEGIN) {
    return {
      ...state,
      devOnProjectLoading: true,
    };
  }

  if (action.type === GET_USER_PROJECT_SUCCESS) {
    return {
      ...state,
      devOnProjectLoading: false,
      devOnProject: action.payload,
    };
  }

  if (action.type === GET_USER_PROJECT_ERROR) {
    return {
      ...state,
      devOnProjectError: true,
    };
  }

  if (action.type === GET_MY_TICKET_BEGIN) {
    return {
      ...state,
      myTicketLoading: true,
    };
  }

  if (action.type === GET_MY_TICKET_SUCCESS) {
    return {
      ...state,
      myTicketLoading: false,
      myTickets: action.payload,
    };
  }

  if (action.type === GET_MY_TICKET_ERROR) {
    return {
      ...state,
      myTicketError: true,
    };
  }
  if (action.type === EDIT_USER_INFO_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_USER_INFO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertText: "User Profile Updated!",
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
