import { createSlice } from '@reduxjs/toolkit'

export const dateTextboxSlice = createSlice({
  name: 'dateTextbox',
  initialState: {
    value: '',
  },
  reducers: {
    changeDate: {
      reducer(state, action) {
        const { inputID, inputValue } = action.payload
        
        state.value = inputValue
        //state.value = action.payload;

      },
      prepare (inputID, inputValue) {
        return {
          payload: { inputID, inputValue }
        }
      }
    },
    resetDate: state => {
      state.value = ''

    }
  },
})

// Action creators are generated for each case reducer function
export const { changeDate } = dateTextboxSlice.actions

export default dateTextboxSlice.reducer