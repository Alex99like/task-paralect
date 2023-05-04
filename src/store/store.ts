import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer } from './root/authSlice'
import { jobsApi } from '../service/JobsService'

const rootReducer = combineReducers({
  root: reducer,
  [jobsApi.reducerPath]: jobsApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => {
  //     getDefaultMiddleware().concat(jobsApi.middleware)
  // },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
