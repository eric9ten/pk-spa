import { createSlice } from '@reduxjs/toolkit'

export const dateTextboxSlice = createSlice({
  name: 'dateTextbox',
  initialState: {
    value: '',
  },
  reducers: {
    changeDate: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeDate } = dateTextboxSlice.actions

export default dateTextboxSlice.reducer