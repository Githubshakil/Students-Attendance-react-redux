import { configureStore } from '@reduxjs/toolkit'
import studentResucer  from './slices/counter/studentSlice'



export const store = configureStore({
  reducer: {
    students: studentResucer,
  },
})