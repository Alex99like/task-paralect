import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer } from './auth/authSlice'

const rootReducer = combineReducers({
  user: reducer
})

export const store = configureStore({
  reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
