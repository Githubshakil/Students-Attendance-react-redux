import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const studentSlice = studentSlice({
  name: 'student',
  initialState,
  reducers: {
    
  },
})


export const {  } = studentSlice.actions

export default studentSlice.reducer