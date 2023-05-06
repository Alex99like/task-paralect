import { createSlice } from "@reduxjs/toolkit";
import { setCatagories, setVacations } from "./jobsAction";
import { ICategory, IVacation } from "../../types/vacantion.type";
import { IFormJob } from "../../pages/Jobs";

interface IInitialState {
  categories: Array<ICategory>
  vacations: Array<IVacation>
  favorites: Array<IVacation>,
  form: IFormJob
  loading: boolean
  totalPage: number
  countPage: number
}

const initialState: IInitialState = {
  categories: [],
  vacations: [],
  favorites: [],
  form: {
    search: '',
      filter: {
        industry: '',
        salary: {
          from: 0,
          to: 0
        }
      }
  },
  loading: false,
  totalPage: 1,
  countPage: 1
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setFormValues(state, { payload }: { payload: IFormJob }) {
      state.form = payload
    },
    setPage(state, { payload }: { payload: number }) {
      state.countPage = payload
    },
    addFavorites(state, { payload }: { payload: IVacation }) {
      state.favorites.push(payload)
    },
    removeFavorites(state, { payload }: { payload: IVacation }) {
      state.favorites = state.favorites.filter(el => el.id !== payload.id)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setCatagories.fulfilled, (state, { payload }) => {
      state.categories = payload
    }) 
    builder.addCase(setVacations.pending, (state) => {
      state.loading = false
    }) 
    builder.addCase(setVacations.fulfilled, (state, { payload }) => {
      state.vacations = payload.objects
      state.totalPage = payload.total / 4
      state.loading = true
    }) 
  }
})

export const { reducer, actions } = jobsSlice