import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../Utils/axios";

export const getAlljobs = createAsyncThunk(
  "alljob/getAlljobs",
  async (_, thunkAPI) => {
    let url = `/jobs`;

    try {
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deletejob = createAsyncThunk(
  "alljob/deletejob",
  async (jobID, thunkAPI) => {
    console.log(jobID);
    try {
      const resp = await customFetch.delete(`/jobs/${jobID}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(getAlljobs());
    //   console.log(resp.data);
      return resp.data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  Loading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAlljobs.pending, (state) => {
        state.Loading = true;
      })
      .addCase(getAlljobs.fulfilled, (state, action) => {
        console.log(action);
        const { jobs } = action.payload;
        state.Loading = false;
        state.jobs = jobs;
      })
      .addCase(getAlljobs.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })
      .addCase(deletejob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })

      .addCase(deletejob.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })
  },
});

export default allJobsSlice.reducer;
