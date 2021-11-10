import { configureStore } from '@reduxjs/toolkit'

import gameSetupReducer from '../components/GameSetupForm/gameSetupSlice'
import dateTextboxReducer from '../components/DateTextbox/dateTextboxSlice'
import inputTextboxReducer from '../components/InputTextbox/inputTextboxSlice'
import homeCheckboxReducer from '../components/HomeCheckbox/homeCheckboxSlice'
import inputCounterReducer from '../components/InputCounter/inputCounterSlice'
import radioTwoCHoiceReducer from '../components/RadioTwoChoice/radioTwoChoiceSlice'
import goalCounterReducer from '../components/GoalCounter/goalCounterSlice'

export default configureStore({
  reducer: {
    gameHalf: gameSetupReducer,
    dateTextbox: dateTextboxReducer,
    inputTextbox: inputTextboxReducer,
    isHome: homeCheckboxReducer,
    startingGoal: radioTwoCHoiceReducer,
    goalCounter: goalCounterReducer,
    inputCounter: inputCounterReducer,

  },
})