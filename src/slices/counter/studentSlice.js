import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const studentSlice = createSlice({
  name: 'students',
  initialState:[],
  reducers: {
    addStudent:(state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
        present: false,
      })
    },
    toggleAttendance: (state,action) => {
      const student = state.find((s) => s.id === action.payload);
      if (student) {
        student.present = !student.present;
      }
    }
  },
})


export const {addStudent, toggleAttendance  } = studentSlice.actions

export default studentSlice.reducer