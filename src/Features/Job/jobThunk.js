import authHeader from "../../Utils/AuthHeader";
import customFetch from "../../Utils/axios";
import { getAlljobs, hideLoading, showLoading } from "../Alljob/Alljob";




export const CreateJobThunk =async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", job, authHeader(thunkAPI));

      // console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }


  export const EditJobThunk = async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job, authHeader(thunkAPI));

      // console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }

  export const DeleteJobThunk =async (jobID, thunkAPI) => {
    // console.log(jobID);
    thunkAPI.dispatch(showLoading());
    try {
      const resp = await customFetch.delete(`/jobs/${jobID}`, authHeader(thunkAPI));
      thunkAPI.dispatch(getAlljobs());
      //   console.log(resp.data);
      return resp.data.msg;
    } catch (error) {
      thunkAPI.dispatch(hideLoading());

      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }