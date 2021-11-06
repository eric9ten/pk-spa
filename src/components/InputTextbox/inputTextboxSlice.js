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
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeInput } = inputTextboxSlice.actions

export default inputTextboxSlice.reducer