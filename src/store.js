import { configureStore } from '@reduxjs/toolkit'
import studentSlice from './slices/counter/studentSlice'



export const store = configureStore({
  reducer: {
    student: studentSlice,
  },
})