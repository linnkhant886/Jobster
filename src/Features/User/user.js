import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../Utils/axios";
import {
  GetUserFromLocalStorage,
  RemoveFromLocalStorage,
  addToLocalStorage,
} from "../../Utils/localStorage";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("auth/register", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  Loading: false,
  user: GetUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LogoutUser: (state) => {
      state.user = null;
      RemoveFromLocalStorage();
      toast.success("Logout Successful");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.Loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.Loading = false;
        toast.success("Register Success");
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.Loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.Loading = false;
        state.user = user;
        addToLocalStorage(user);

        toast.success(`Welcome back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      });
  },
});
export const { LogoutUser } = userSlice.actions;
export default userSlice.reducer;
