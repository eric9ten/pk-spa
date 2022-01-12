import React from 'react'
import { //useSelector, 
  useDispatch } from 'react-redux'
import { setStartingGoal } from './radioTwoChoiceSlice'

import s from './radio-two-choice.module.scss'

export default function RadioTwoChoice(props) {
  //const goalStart = useSelector((state) => (state, 'startingGoal'))
  const dispatch = useDispatch()

  
  function handleChange (e) {
    dispatch(setStartingGoal(e.target.value))

  }

  return (
    <div className={s.goalCheckbox}>
      <label>
      <input type="radio" name={props.name} id={props.id1} value={props.value1} defaultChecked onClick={handleChange}/>
      <div className={`${s.frontEnd} ${s.box}`}>
        <span>Left</span>
      </div>
    </label>

      <label>
      <input type="radio" name={props.name} id={props.id2} value={props.value2} onClick={handleChange}/>
      <div className={`${s.backEnd} ${s.box}`}>
        <span>Right</span>
      </div>
    </label>
    </div>
  )
}