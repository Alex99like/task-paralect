import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory, IReqVacation } from "../../types/vacantion.type";
import { JobsService } from "../../service/JobsService";
import { IFormJob } from "../../pages/Jobs";

export const setCatagories = createAsyncThunk<Array<ICategory>>(
  'jobs/categories', 
  async (_, thunkAPI) => {
    try {
      const catagories = await JobsService.getCategories()
      return catagories
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const setVacations = createAsyncThunk<IReqVacation, IFormJob>(
  'jobs/vacations', 
  async (form, thunkAPI) => {
    try {
      const catagories = await JobsService.getVacation(form)
      return catagories
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)
