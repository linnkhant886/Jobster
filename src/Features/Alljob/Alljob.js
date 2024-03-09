import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizedResponse } from "../../Utils/axios";
import authHeader from "../../Utils/AuthHeader";

export const getAlljobs = createAsyncThunk(
  "alljob/getAlljobs",
  async (Searchjob, thunkAPI) => {
    const { page } = thunkAPI.getState().alljob;
    const { search, status, jobTypes, sort } = Searchjob;
    let url = `/jobs?status=${status}&jobType=${jobTypes}&sort=${sort}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }

    try {
      const resp = await customFetch.get(url, authHeader(thunkAPI));
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getStats = createAsyncThunk(
  "alljob/getStats",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/jobs/stats", authHeader(thunkAPI));
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

// const initialFiltersState = {
//   search: "",
//   searchStatus: "all",
//   searchType: "all",
//   sort: "latest",
//   sortOptions: ["latest", "oldest", "a-z", "z-a"],
// };

const initialState = {
  Loading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  // ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.Loading = true;
    },

    hideLoading: (state) => {
      state.Loading = false;
    },

    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAlljobs.pending, (state) => {
        state.Loading = true;
      })
      .addCase(getAlljobs.fulfilled, (state, { payload }) => {
        // console.log(action);
        // const { jobs } = action.payload;
        state.Loading = false;
        state.jobs = payload.jobs;
        state.totalJobs = payload.totalJobs;
        state.numOfPages = payload.numOfPages;
      })
      .addCase(getAlljobs.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })

      .addCase(getStats.pending, (state) => {
        state.Loading = true;
      })
      .addCase(getStats.fulfilled, (state, { payload }) => {
        state.Loading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(getStats.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      });
  },
});

export const { showLoading, hideLoading, changePage } = allJobsSlice.actions;

export default allJobsSlice.reducer;
