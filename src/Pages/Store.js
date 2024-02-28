import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Features/User/user'
import JobSlice from '../Features/Job/Job'
import allJobsSlice from '../Features/Alljob/Alljob'


export const store = configureStore({
    reducer : {
        user : userSlice,
        job : JobSlice,
        alljob:allJobsSlice
    }
})