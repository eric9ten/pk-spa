import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setStartingGoal, resetStartingGoal } from './radioTwoChoiceSlice'

import s from './radio-two-choice.module.scss'

export default function RadioTwoChoice(props) {
  const eleName = 'startingGoal'
  const goalStart = useSelector((state) => state.startingGoal)
  const dispatch = useDispatch()

  // TODO: Need to update radio based on store or local storage
  if (localStorage.getItem(eleName) !== null) {
    dispatch(setStartingGoal(localStorage.getItem(eleName)))

  } else {
    dispatch(resetStartingGoal())
    localStorage.setItem(eleName, goalStart)
    //updateCheck()

  }

  function updateCheck() {

    if (goalStart.startingGoal === 'left' ) {
      const leftGoal = document.getElementById("startLeft")
      //leftGoal.checked = true
      //document.getElementById("startRight").checked = false

    } else {
      const leftGoal = document.getElementById("startLeft")
      //leftGoal.checked = false
      //document.getElementById("startRight").checked = true

    }

  }
  
  function handleChange (e) {
    dispatch(setStartingGoal(e.target.value))
    localStorage.setItem(eleName, e.target.value)
    //updateCheck()

  }

  return (
    <div className={s.goalCheckbox}>
      <label>
      <input type="radio" name={props.name} id={props.id1} value={props.value1} onClick={handleChange} defaultChecked />
      <div className={`${s.frontEnd} ${s.box}`}>
        <span>Left</span>
      </div>
    </label>

      <label>
      <input type="radio" name={props.name} id={props.id2} value={props.value2} onClick={handleChange} />
      <div className={`${s.backEnd} ${s.box}`}>
        <span>Right</span>
      </div>
    </label>
    </div>
  )
}