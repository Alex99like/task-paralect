import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRequestAuth } from "./types";
import { AuthService } from "../../service/AuthService";

export const authLogin = createAsyncThunk<IRequestAuth | undefined>(
  'auth/login',
  async (_, rejectValue) => {
    try {
      return await AuthService.login()
    } catch(error) {
      rejectValue.rejectWithValue(error)
    }
  }
)