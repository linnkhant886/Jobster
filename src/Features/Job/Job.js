import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../Utils/axios";

// const NormalState = {
//   position: "",
//   company: "",
//   jobLocation: "",
//   status: "pending",
//   jobTypes: "full-time",
// };

export const CreateJob = createAsyncThunk(
  "job/CreateJob",
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", job, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      

      // console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  Loading: false,
  isEditing: false,

  // job: null,
  editJobId: "",
};

const JobSlice = createSlice({
  name: "job",
  initialState,
  

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
      });
  },
});
export default JobSlice.reducer;
