import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_USER,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  CLEAR_EDIT_ALERT,
} from "./actions";
import axios from "axios";

export const initialState = {
  // alerts (functionality will be added later)
  isLoading: false,
  // user
  user: null,
  userLoading: true,
  // jobs
  isEditing: false,
  editLoading: false,
  editAlert: false,
  editJobID: "",
  position: "",
  company: "",
  statusOptions: ["pending", "interview", "declined"],
  status: "pending",
  // all jobs
  jobs: [],
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // logoutUser();
        console.log("unauthorized error");
      }
      return Promise.reject(error);
    }
  );

  // setup user
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await authFetch.post(`/auth/${endPoint}`, currentUser);
      const { user } = data;

      dispatch({ type: SETUP_USER_SUCCESS, payload: { user, alertText } });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    // clearAlert();
  };
  // get current user
  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch(`/auth/getCurrentUser`);
      const { user } = data;

      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { user } });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
  };
  // logout user
  const logoutUser = async () => {
    await authFetch(`/auth/logout`);
    dispatch({ type: LOGOUT_USER });
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createJob = async () => {
    dispatch({ type: CREATE_JOB_BEGIN });
    try {
      const { company, position, status } = state;
      await authFetch.post("/jobs", { company, position, status });

      dispatch({ type: CREATE_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
  };

  const getJobs = async () => {
    dispatch({ type: GET_JOBS_BEGIN });
    try {
      let url = `/jobs`;

      const { data } = await authFetch(url);
      const { jobs } = data;
      dispatch({ type: GET_JOBS_SUCCESS, payload: { jobs } });
    } catch (error) {
      console.log(error.response);
      logoutUser();
    }
  };

  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };
  const editJob = async () => {
    dispatch({ type: EDIT_JOB_BEGIN });
    try {
      const { position, company, status } = state;

      await authFetch.patch(`/jobs/${state.editJobID}`, {
        company,
        position,
        status,
      });

      dispatch({ type: EDIT_JOB_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const deleteJob = async (id) => {
    dispatch({ type: DELETE_JOB_BEGIN });
    try {
      await authFetch.delete(`/jobs/${id}`);
      getJobs();
    } catch (error) {
      logoutUser();
    }
  };

  const clearEditAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_EDIT_ALERT });
    }, 4000);
  };

  useEffect(() => {
    getCurrentUser(); // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setupUser,
        logoutUser,
        getCurrentUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        deleteJob,
        editJob,
        clearEditAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
