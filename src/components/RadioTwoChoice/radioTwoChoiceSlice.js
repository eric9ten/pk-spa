import { createSlice } from '@reduxjs/toolkit'

export const radioTwoChoiceSlice = createSlice({
  name: 'goalRadioBox',
  initialState: {
    startingGoal: 'left'
  },
  reducers: {
    setStartingGoal(state, action) {
      
      state.startingGoal = action.payload;

    },
  },
})

// Action creators are generated for each case reducer function
export const { setStartingGoal } = radioTwoChoiceSlice.actions

export default radioTwoChoiceSlice.reducer