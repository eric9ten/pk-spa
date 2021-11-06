import { createSlice } from '@reduxjs/toolkit'

export const homeCheckboxSlice = createSlice({
  name: 'homeCheckbox',
  initialState: {
    checked: true,
  },
  reducers: {
    isHomeToggled(state, action) {
      state.checked = action.payload;

    },
  },
})

// Action creators are generated for each case reducer function
export const { isHomeToggled } = homeCheckboxSlice.actions

export default homeCheckboxSlice.reducer