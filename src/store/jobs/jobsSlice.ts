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
  favoritePage: number
}

const initialState: IInitialState = {
  categories: [],
  vacations: [],
  favorites: [],
  form: {
    search: '',
    industry: '',
    from: '',
    to: ''
  },
  loading: false,
  totalPage: 1,
  countPage: 1,
  favoritePage: 1
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
    setFavoritePage(state, { payload }: { payload: number }) {
      state.favoritePage = payload
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
      const thisPages = Math.ceil(payload.total / 4) - 1
      state.vacations = payload.objects
      state.totalPage = thisPages < 125 ? thisPages : 125
      state.loading = true
    }) 
  }
})

export const { reducer, actions } = jobsSlice