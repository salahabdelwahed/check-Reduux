import { configureStore } from '@reduxjs/toolkit' 
import TodoSlice from "../Redux/Slice/TodoSlice"

export const store = configureStore({
  reducer: { 
    todo: TodoSlice
  },
})