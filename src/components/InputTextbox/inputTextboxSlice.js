import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: {}
}

export const inputTextboxSlice = createSlice({
  name: 'inputTextbox',
  initialState,
  reducers: {
    changeInput: {
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
    },
    resetInput: {
      reducer(state, action) {
        const { inputID } = action.payload
        
        state.entities[inputID] = ''

      },
      prepare (inputID) {
        return {
          payload: { inputID }
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeInput, resetInput } = inputTextboxSlice.actions

export default inputTextboxSlice.reducer