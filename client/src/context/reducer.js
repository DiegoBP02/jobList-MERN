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
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
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
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return {
      ...state,
      userLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      userLoading: false,
      user: action.payload.user,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      userLoading: false,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobID: "",
      position: "",
      company: "",
      status: "pending",
    };
    return { ...state, ...initialState };
  }
  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_JOB_SUCCESS) {
    return { ...state, isLoading: false };
  }
  if (action.type === CREATE_JOB_ERROR) {
    // more functionality later
    return { ...state, isLoading: false };
  }
  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return { ...state, isLoading: false, jobs: action.payload.jobs };
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, company, position, status } = job;
    return {
      ...state,
      isEditing: true,
      editJobID: _id,
      position,
      company,
      status,
    };
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return { ...state, isLoading: true, editLoading: true };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return { ...state, isLoading: false, editLoading: false, editAlert: true };
  }
  if (action.type === EDIT_JOB_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === CLEAR_EDIT_ALERT) {
    return { ...state, editAlert: false };
  }

  throw new Error(`no such action: ${action.type}`);
};
export default reducer;
