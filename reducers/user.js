import { createSlice } from "@reduxjs/toolkit";
import {
    loadMyInfo
} from '../actions/user'


// 기본 state
export const initialState = {
    me: null,
    userInfo: null,
    // loadMyInfo
    loadMyInfoLoading: false,
    loadMyInfoDone: false,
    loadMyInfoError: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => builder
        //loadMyInfo
        .addCase(loadMyInfo.pending, (state) => {
            state.loadMyInfoLoading = true;
            state.loadMyInfoDone = false;
            state.loadMyInfoError = null;
        })
        .addCase(loadMyInfo.fulfilled, (state,action) => {
            state.loadMyInfoLoading = false;
            state.loadMyInfoDone = true;
            state.me = action.payload // state.loadMyInfoError = null;
        })
        .addCase(loadMyInfo.rejected, (state, action) => {
            state.loadMyInfoLoading = false;
            state.loadMyInfoError
        })
})

export default userSlice