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
} from "./action";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  projects: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const setupUser = async ({ endPoint, currentUser, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const response = await axios.post(`/api/v1/auth/${endPoint}`, {
        user_name: currentUser.name,
        email: currentUser.email,
        user_password: currentUser.password,
        role: "user",
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

  return (
    <AppContext.Provider
      value={{ ...state, setupUser, displayAlert, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
