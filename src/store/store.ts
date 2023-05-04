import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer } from './root/authSlice'

const rootReducer = combineReducers({
  root: reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
