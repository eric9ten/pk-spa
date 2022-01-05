import { combineReducers } from 'redux';
import { changeHalf } from '../components/GameSetupForm/gameSetupSlice';
import { changeDate } from '../components/DateTextbox/dateTextboxSlice';
import { changeInput } from '../components/InputTextbox/inputTextboxSlice';
import { isHomeToggled } from '../components/HomeCheckbox/homeCheckboxSlice';
import { setStartingGoal } from '../components/RadioTwoChoice/radioTwoChoiceSlice';
import { changeCount } from '../components/GoalCounter/goalCounterSlice';
import { changeAmount } from '../components/InputCounter/inputCounterSlice';


export default combineReducers({
    changeHalf,
    changeDate,
    changeInput,
    isHomeToggled,
    setStartingGoal,
    changeCount,
    changeAmount
});
