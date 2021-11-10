import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: {
    teamAGoals: 0,
    teamBGoals: 0,
  }
}

export const goalCounterSlice = createSlice({
  name: 'goalCounter',
  initialState,
  reducers: {
    changeCount: {
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
export const { increment, decrement, changeCount } = goalCounterSlice.actions

export default goalCounterSlice.reducer