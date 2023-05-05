import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer } from './root/authSlice'
import { reducer as jobsReduces } from './jobs/jobsSlice' 

const rootReducer = combineReducers({
  root: reducer,
  jobs: jobsReduces
})

export const store = configureStore({
  reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
