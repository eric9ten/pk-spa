import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: {
    teamAPasses: 0, teamAShots: 0, teamACorners: 0, teamAGoalKicks: 0, teamATackles: 0, teamAOffsides: 0, teamAFouls: 0, teamAYellowCards: 0, teamARedCards: 0,
    teamBPasses: 0, teamBShots: 0, teamBCorners: 0, teamBGoalKicks: 0, teamBTackles: 0, teamBOffsides: 0, teamBFouls: 0, teamBYellowCards: 0, teamBRedCards: 0,

  }
}
export const inputCounterSlice = createSlice({
  name: 'inputCounter',
  initialState,
  reducers: {
    changeAmount: {
      reducer(state, action) {
        const { inputID, inputValue } = action.payload
        
        state.entities[inputID] = inputValue
        //state.value = action.payload;

      },
      prepare (inputID, inputValue) {
        return {
          payload: { inputID, inputValue }
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeAmount } = inputCounterSlice.actions

export default inputCounterSlice.reducer