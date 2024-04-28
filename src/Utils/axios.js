import axios from "axios";
import { LogoutUser } from "../Features/User/user";

const customFetch = axios.create({
  baseURL: "https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
});

export default customFetch;

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(LogoutUser(true));
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};
