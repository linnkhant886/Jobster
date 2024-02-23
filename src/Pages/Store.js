import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Features/User/user'


export const store = configureStore({
    reducer : {
        user : userSlice
    }
})