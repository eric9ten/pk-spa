import { createSlice } from '@reduxjs/toolkit'

export const radioTwoChoiceSlice = createSlice({
  name: 'goalRadioBox',
  initialState: {
    startingGoal: ''
  },
  reducers: {
    setStartingGoal(state, action) {
      
      state.startingGoal = action.payload;

    },
    resetStartingGoal(state){
      state.startingGoal = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setStartingGoal, resetStartingGoal } = radioTwoChoiceSlice.actions

export default radioTwoChoiceSlice.reducer