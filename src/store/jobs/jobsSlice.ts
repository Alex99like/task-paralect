import { createSlice } from "@reduxjs/toolkit";
import { setCatagories, setVacations } from "./jobsAction";
import { ICategory, IVacation } from "../../types/vacantion.type";

interface IInitialState {
  categories: Array<ICategory>
  vacations: Array<IVacation>
  totalPage: number
}

const initialState: IInitialState = {
  categories: [],
  vacations: [],
  totalPage: 1
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCatagories.fulfilled, (state, { payload }) => {
      state.categories = payload
    }) 
    builder.addCase(setVacations.fulfilled, (state, { payload }) => {
      state.vacations = payload.objects
      state.totalPage = payload.total
    }) 
  }
})

export const { reducer } = jobsSlice