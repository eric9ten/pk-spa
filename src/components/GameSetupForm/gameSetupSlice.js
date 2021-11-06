import { createSlice } from '@reduxjs/toolkit'

export const gameSetupFormSlice = createSlice({
  name: 'gameHalf',
  initialState: {
    value: 1,
  },
  reducers: {
    changeHalf: (state, action) => {

      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeHalf } = gameSetupFormSlice.actions

export default gameSetupFormSlice.reducer