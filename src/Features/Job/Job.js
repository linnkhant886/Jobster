import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { CreateJobThunk, DeleteJobThunk, EditJobThunk } from "./jobThunk";

export const CreateJob = createAsyncThunk("job/CreateJob", CreateJobThunk);

export const EditingJob = createAsyncThunk("job/EditingJob", EditJobThunk);

export const deletejob = createAsyncThunk("alljob/deletejob", DeleteJobThunk);

const initialState = {
  Loading: false,
  isJobUpdated: false,
};

const JobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    editjob: (state, { payload }) => {
      // console.log(payload);
      return { ...state, ...payload };
    },
    resetIsJobUpdated: (state) => {
      state.isJobUpdated = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(CreateJob.pending, (state) => {
        state.Loading = true;
      })
      .addCase(CreateJob.fulfilled, (state) => {
        // const { job } = action.payload;
        state.Loading = false;
        // state.job = job;
        toast.success("Job Created");
      })
      .addCase(CreateJob.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      })

      .addCase(EditingJob.pending, (state) => {
        state.Loading = true;
      })
      .addCase(EditingJob.fulfilled, (state) => {
        state.Loading = false;
        toast.success("Job Updated");
        state.isJobUpdated = true;
      })
      .addCase(EditingJob.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
        console.log(payload);
      })
      .addCase(deletejob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })

      .addCase(deletejob.rejected, (state, { payload }) => {
        state.Loading = false;
        toast.error(payload);
      });
  },
});
export const { editjob, resetIsJobUpdated } = JobSlice.actions;
export default JobSlice.reducer;
