import { createSlice } from "@reduxjs/toolkit";
import { IRequestAuth } from "./types";
import { getLocalStorage } from "../../utils/localStorage";
import { authLogin } from "./authActions";

const initialState: { user: IRequestAuth | null } = {
  user: getLocalStorage('user')
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, { payload }) => {
      state.user = payload || null 
    })
    .addCase(authLogin.rejected, (state) => {
        state.user = null
    })
  }
})

export const { reducer } = authSlice